import { useMutation, useQuery } from "react-query";
import api from "../../../services/api/api";
import { ShortPollType } from "./types";

export const useAllPallsQuery = (userId: string) => {
  return useQuery(["all-palls", userId], () => {
    return api.get<ShortPollType[], ShortPollType[]>(
      `statistic/allpolls?userId=${userId}`
    );
  });
};

