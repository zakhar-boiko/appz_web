import dayjs from "dayjs";

const DATE_FORMAT = "DD.MM.YYYY";

export const formatDate = (date: string, format = DATE_FORMAT) =>
  dayjs(date).format(format);
