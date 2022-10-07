import { CustomTable } from "../components/CustomTable";
import { Container } from "@mui/material";
import { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { RootState } from "../store";

const Home: FC<any> = (): ReactElement => {
  const data = useSelector((state: RootState) => state.global.data);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg">
      <CustomTable />
    </Container>
  );
};

export default Home;
