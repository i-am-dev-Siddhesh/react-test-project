import { Toolbar, Typography } from "@mui/material";
 
const CustomToolBar = () => {
  return (
    <div>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
          fontSize="30px"
        >
          Data
        </Typography>
      </Toolbar>
    </div>
  );
};

export default CustomToolBar;
