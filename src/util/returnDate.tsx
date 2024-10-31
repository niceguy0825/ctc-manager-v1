import moment from "moment";

export const dateFormat = "YYYY-MM-DD HH:mm";

export const dateReturnToFormat = (date: string | number | Date) =>
  moment(date).format(dateFormat);
