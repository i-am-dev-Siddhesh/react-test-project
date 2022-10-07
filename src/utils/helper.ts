import { IData } from "../types";

export const errorFormatter = (error: any) => {
  const message =
    error?.response?.data?.message ||
    error?.response?.data?.data?.message ||
    error?.message ||
    "Something went wrong";

  return message;
};

export const convertTime12to24 = (time12h: string) => {
  let [hours, minutes, modifier]: any = time12h.split(/\W+/);

  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = parseInt(hours, 10) + 12;

  return [hours, minutes];
};

export const dateSorter = (array: IData[], order: "asc" | "desc" | "") => {
  if (!order) {
    return array;
  }
  const result = array.sort((a, b) => {
    const [h1, m1]: any = convertTime12to24(a.time);
    const [h2, m2]: any = convertTime12to24(b.time);

    return order === "desc" ? h2 - h1 || m2 - m1 : h1 - h2 || m1 - m2;
  });
  return result;
};
