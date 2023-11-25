import { useMutation } from "react-query";
import api from "../../services/api/api";

export const useSignIn = () => {
  return useMutation((body: {}) => {
    return api.post("/test");
  });
};
