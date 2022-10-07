import BasicLayout from "../components/Layout";
import { Container } from "@mui/material";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable } from "../components/CustomTable";
import GlobalService from "../services/Global";
import { RootState } from "../store";
import { setLatestData } from "../store/reducers/global.reducer";
import { IData } from "../types";

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.global.data);

  useEffect(() => {
    GlobalService.getData()
      .then((resp) => {
        const data: IData[] = resp.data;

        dispatch(setLatestData(data));
      })
      .catch((_resp) => {
        dispatch(setLatestData([]));
      });
  }, []);

  return (
    <BasicLayout>
      <Container maxWidth="lg">
        <CustomTable data={data} />
      </Container>
    </BasicLayout>
  );
};

export default Home;
