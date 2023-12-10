import { useMutation, useQuery } from "react-query";
import api from "../../../services/api/api";
import { BigStatisticType, ShortPollType } from "./types";

export const useAllPallsQuery = (userId: string) => {
  return useQuery(["all-palls", userId], () => {
    return api.get<ShortPollType[], ShortPollType[]>(
      `statistic/allpolls?userId=${userId}`
    );
  });
};

  // Define the function to fetch data from the endpoint
const fetchDataByPoll = async (pollId: string, filterId: string | null, userId: string) => {
    // Construct the query parameters
    const params = new URLSearchParams({
      pollId: pollId,
      userId: userId,
    });
  
    // Add filterId to the query parameters only if it is not null
    if (filterId !== null) {
      params.append('filterId', filterId);
    }
  
    // Make the GET request using the api instance
    return await api.get<BigStatisticType,BigStatisticType>(`/statistic?${params.toString()}`);
  };
  
  // Define the hook to use the fetch function
  export const useDataByPollQuery = (pollId: string, filterId: string | null, userId: string) => {
    return useQuery(['data-by-poll', pollId, filterId, userId], () =>
      fetchDataByPoll(pollId, filterId, userId)
    );
  };