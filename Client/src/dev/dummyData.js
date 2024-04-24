export const employeeDetails = [
  { id: 12, lastName: "Snow", firstName: "Jon", dob: "23-02-1992" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", dob: "13-12-1993" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", dob: "21-12-1998" },
  { id: 4, lastName: "Stark", firstName: "Arya", dob: "11-04-1992" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, dob: "12-05-1972" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", dob: "05-06-1987" },
  { id: 8, lastName: "Frances", firstName: "Rossini", dob: "04-03-1988" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", dob: "18-08-1976" },
];

export const orderDetails = [
  {
    id: 1,
    operator: "Jon Snow",
    designNo: 35,
    weight: 22,
    process: "Casting",
  },
  {
    id: 2,
    operator: "Cersei Lannister",
    designNo: 42,
    weight: 45,
    process: "Filling",
  },
  {
    id: 3,
    operator: "Jaime Lannister",
    designNo: 45,
    weight: 65,
    process: "Polishing",
  },
];

export const getEmployeeDetails = (id) => {
  let filterDate = employeeDetails.filter((employee) => employee.id == id);
  return filterDate[0];
};
