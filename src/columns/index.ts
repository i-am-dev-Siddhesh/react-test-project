export interface IHeadCell {
    id: string;
    label: string;
  }
  
  export const headCells: readonly IHeadCell[] = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "first_name",
      label: "First Name",
    },
    {
      id: "last_name",
      label: "Last Name",
    },
    {
      id: "email",
      label: "Email",
    },
  
    {
      id: "gender",
      label: "Gender",
    },
    {
      id: "ip_address",
      label: "IP Address",
    },
    {
      id: "time",
      label: "Time",
    },
  ];