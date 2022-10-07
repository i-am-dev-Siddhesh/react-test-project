import PanToolIcon from "@mui/icons-material/PanTool";
import { Typography } from "@mui/material";
interface IProps {
  children: React.ReactNode;
}
const BasicLayout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        style={{ width: "100%" }}
        component="div"
        color="primary.light"
        bgcolor="primary.dark"
        sx={{ p: 3,mb:10 }}
      >
        Hello there{" "}
        <PanToolIcon
          style={{
            color: "yellow",
            transform: "rotate(-20deg)",
            marginBottom: "-2px",
          }}
        />
        
      </Typography>
      {children}
    </>
  );
};

export default BasicLayout;
