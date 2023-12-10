import { useMutation, useQuery } from "react-query";
import api from "../../../services/api/api";
import { HistoryResponseType } from "./types";

export const useTreatmentHistoryQuery = (userId: string, filter: string) => {
  return useQuery(["treatment-history", userId, filter], () => {
    return api.get<HistoryResponseType[], HistoryResponseType[]>(
      `medicalrecord/${filter ? filter : ""}?userId=${userId}`
    );
  });
};


export const useTreatmentHistoryDetailsQuery = (id: string, userId: string) => {
  return useQuery(["treatment-history-details", id, userId], () => {
    return api.get<HistoryResponseType, HistoryResponseType>(
      `medicalrecord/details/${id}?userId=${userId}`
    );
  }, {
    // enabled: id.length > 0 && userId.length > 0
  });
};
