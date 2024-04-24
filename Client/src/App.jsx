import { useEffect, useState } from "react";
import "../src/App.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
  AccountBox,
  ArrowBack,
  CloudDone,
  Delete,
  DescriptionOutlined,
  DiamondOutlined,
  DonutLargeOutlined,
  Edit,
  RotateLeftOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Employee from "./components/forms/Employee";
import EmployeeDetails from "./components/details/EmployeeDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  headerButtons,
  modeType,
  pageContants,
  pageTypeConstant,
} from "./constants";
import OrderDetails from "./components/details/OrderDetails";
import Modal from "@mui/material/Modal";

const sideMenu = [
  {
    label: "Order",
    icon: <DescriptionOutlined />,
    key: "order",
    page: pageContants.ORDER,
  },
  {
    label: "Employee",
    icon: <AccountBox />,
    key: "employee",
    page: pageContants.EMPLOYEE,
  },
  { label: "Designs", icon: <DiamondOutlined />, key: "design" },
  { label: "Process", icon: <DonutLargeOutlined />, key: "process" },
];

const theme = createTheme({
  typography: {
    fontFamily: `"Cascadia Code", "Fira Mono", "SF Mono", sans-serif`,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
    {
      outline: "none",
    },
});

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [mode, setMode] = useState("");
  const [page, setPage] = useState(pageContants.HOME);
  const [pageType, setPageType] = useState(pageTypeConstant.VIEW);
  const [displayButtons, setDisplayButtons] = useState([]);
  const [viewRequest, setViewRequest] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let displayButtons = [];
    if (mode == modeType.VIEW_DETAIL) {
      displayButtons.push(headerButtons.BACK);
      displayButtons.push(headerButtons.EDIT);
      displayButtons.push(headerButtons.DISCARD);
    } else if (mode == modeType.EDITING) {
      displayButtons.push(headerButtons.BACK);
      displayButtons.push(headerButtons.RESET);
      displayButtons.push(headerButtons.SAVE);
    }
    setDisplayButtons(displayButtons);
  }, [mode]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="top-navbar" sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="static"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                ERP HOME
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          className="content-window"
          display="flex"
          sx={{ height: "calc(100% - 64px)" }}
        >
          <Box className="side-navbar" sx={{ display: "flex", width: "24rem" }}>
            <List sx={{ width: "100%" }}>
              {sideMenu.map((option, index) => (
                <ListItem key={option.key} disablePadding>
                  <ListItemButton
                    selected={page && page == option.page && true}
                    onClick={() => {
                      setPage(option.page);
                    }}
                  >
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText primary={option.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            className="detail-window"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              className="detail-header"
              sx={{ width: "100%", display: "flex" }}
            >
              <Box
                className="header-left"
                sx={{ display: "flex", width: "100%" }}
              >
                {displayButtons.includes(headerButtons.BACK) && (
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
                    onClick={() => {
                      // if (mode == modeType.EDITING) {
                      //   setShowModal(true);
                      // } else {
                      setPageType(pageTypeConstant.VIEW);
                      setMode(modeType.VIEW_LIST);
                      // }
                    }}
                  >
                    Back
                  </Button>
                )}
              </Box>
              <Box
                className="header-right"
                sx={{ display: "flex", width: "100%" }}
                justifyContent="flex-end"
                columnGap={1}
              >
                {displayButtons.includes(headerButtons.EDIT) && (
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={() => {
                      setMode(modeType.EDITING);
                    }}
                  >
                    Edit
                  </Button>
                )}
                {displayButtons.includes(headerButtons.DISCARD) && (
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                  >
                    Discard
                  </Button>
                )}
                {displayButtons.includes(headerButtons.RESET) && (
                  <Button
                    variant="outlined"
                    color="warning"
                    startIcon={<RotateLeftOutlined />}
                  >
                    Reset
                  </Button>
                )}
                {displayButtons.includes(headerButtons.SAVE) && (
                  <Button
                    color="success"
                    variant="contained"
                    startIcon={<CloudDone />}
                  >
                    Save
                  </Button>
                )}
              </Box>
            </Box>
            <Box
              className="detail-content"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "92%",
                pb: 2,
                px: 1,
              }}
            >
              {page == pageContants.ORDER && <OrderDetails />}
              {page == pageContants.EMPLOYEE &&
                pageType == pageTypeConstant.VIEW && (
                  <EmployeeDetails
                    onClickView={(id) => {
                      setViewRequest({ id });
                      setPageType(pageTypeConstant.DETAIL);
                      setMode(modeType.VIEW_DETAIL);
                    }}
                    mode={mode}
                  />
                )}
              {page == pageContants.EMPLOYEE &&
                pageType == pageTypeConstant.DETAIL && (
                  <Employee viewRequest={viewRequest} mode={mode} />
                )}
            </Box>
            {showFooter && (
              <Box className="detail-footer" sx={{ width: "100%" }}>
                <Button variant="contained">Back</Button>
                <Button variant="contained">Contained</Button>
              </Box>
            )}
          </Box>
        </Box>
        <Modal
          open={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Warning
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Any unsaved data will be lost. do you want to continue ?.
            </Typography>
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default App;
