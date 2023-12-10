import { useMutation, useQuery } from "react-query";
import api from "../../../services/api/api";
import { PollDetailsType, PollResponseType } from "./types";

export const useAssignedPollsQuery = (userId: string) => {
  return useQuery(
    ["assigned-polls", userId],
    () => {
      return api.get<PollResponseType[], PollResponseType[]>(
        `/poll?userId=${userId}`
      );
    },
    {
      // enabled: userId.length > 0,
    }
  );
};

export const useFetchPollQuery = (id: string, userId: string) => {
  return useQuery(
    ["poll", userId],
    () => {
      return api.get<PollDetailsType, PollDetailsType>(
        `/poll/${id}?userId=${userId}`
      );
    },
    {
      // enabled: userId.length > 0 && id.length > 0,
    }
  );
};


export const useSendPollMutation = () => {
  return useMutation(
    (body: any) => {
      return api.post<any, any>(
        `/poll/response`,
        body 
      );
    },
  );
};