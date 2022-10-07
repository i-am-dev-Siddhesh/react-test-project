import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const errorFormatter = (error: any) => {
  const message =
    error?.response?.data?.message ||
    error?.response?.data?.data?.message ||
    error?.message ||
    "Something went wrong";

  return message;
};
 

export function getDateWithFormat(date: Date) {
  return dayjs.utc(date).format("MMM DD, YYYY");
}
 