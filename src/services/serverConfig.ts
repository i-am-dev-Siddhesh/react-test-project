import axios, {
  AxiosError,
  AxiosResponse,
  AxiosResponseTransformer,
} from "axios";
import { SERVER_API_KEY, SERVER_URL } from "../utils/constants";

const instance = axios.create({
  baseURL: 'http://localhost:8000/v1/' as string,
  timeout: 10000,

  headers: {
    apikey: SERVER_API_KEY as string,
    Accept: "application/json",
    "content-type": "application/json",
  },
  withCredentials: true,
});

const requestFailureCallback = (url: string, error: AxiosError): any => {
  if (error.response) {
    console.log(
      `Request Failed for ${url}: The request was made and the server responded with erroneous status code`,
      error.response.data
    );
  } else if (error.request) {
    console.log(
      `Request Failed for ${url}: The request was made but no response was received`
    );
  } else {
    console.log(
      `Error due to bad request configuration for ${url}`,
      error.message
    );
  }
  throw error;
};

const get = (
  url: string,
  params?: Record<string, any>,
  transformer?: AxiosResponseTransformer
): Promise<any> => {
  return instance
    .get(url, {
      params,
      transformResponse: transformer,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => requestFailureCallback(url, error));
};

const post = (
  url: string,
  params?: Record<string, any>,
  data?: Record<string, any>
): Promise<any> => {
  return instance
    .post(url, data, {
      params,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => requestFailureCallback(url, error));
};

const put = (
  url: string,
  params?: Record<string, any>,
  data?: Record<string, any>
): Promise<any> => {
  return instance
    .put(url, data, {
      params,
    })
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => requestFailureCallback(url, error));
};

export { get, post, put };
