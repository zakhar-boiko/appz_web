import { useMutation } from "react-query";
import { LoginBodyType, LoginResponseType } from "./types";
import loginApi from "../../../services/api/loginApi";

export const useSignIn = () => {
  return useMutation((body: LoginBodyType) => {
    return loginApi.post<LoginResponseType, LoginResponseType>(
      "/auth/login",
      body,
      {
        auth: {
          username: body.email,
          password: body.password,
        },
      }
    );
  });
};
