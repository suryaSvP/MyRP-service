import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { getEmployeeDetails } from "../../dev/dummyData";
import { useEffect, useState } from "react";
import { modeType } from "../../constants";

const variant = "outlined";
const rowSpacing = 4;
const columnGap = 0;
function Employee(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [desigination, setDesigination] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAdderss] = useState("");

  let { viewRequest } = props;
  useEffect(() => {
    let employee = getEmployeeDetails(viewRequest.id);
    if (viewRequest && employee) {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setDob(employee.dob);
      setGender(employee.gender);
      setDesigination(employee.desigination);
      setEmail(employee.email);
      setMobile(employee.mobile);
      setAdderss(employee.address);
    }
  }, [viewRequest]);

  return (
    <>
      <Box className="employee-detail-container" sx={{ height: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <Grid
            container
            rowSpacing={rowSpacing}
            columnGap={columnGap}
            sx={{ width: "100%", m: 0 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="first-name"
                label="First Name"
                variant={variant}
                value={firstName}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="last-name"
                label="Last Name"
                variant={variant}
                value={lastName}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="dob"
                label="Date of Birth"
                variant={variant}
                value={dob}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="gender"
                label="Gender"
                variant={variant}
                value={gender}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="desigination"
                label="Desigination"
                variant={variant}
                value={desigination}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="email"
                label="Email"
                variant={variant}
                value={email}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="mobile"
                label="Mobile"
                variant={variant}
                value={mobile}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
            <Grid className="input-container" item xs={4}>
              <TextField
                sx={{ width: "50ch" }}
                id="address"
                label="Address"
                variant={variant}
                value={address}
                disabled={props.mode != modeType.EDITING}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
export default Employee;
