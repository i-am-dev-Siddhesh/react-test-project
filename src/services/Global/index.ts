import { IData } from "../../types";
import { get } from "../serverConfig";
import Services from "../serviceUrls";

function getData(): Promise<{ data: IData[]; message: string }> {
  return get(Services.mockdata, {});
}

const GlobalService = {
  getData,
};

export default GlobalService;
