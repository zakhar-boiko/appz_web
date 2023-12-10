export type LoginBodyType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  id: string;
  name: string;
  diseases: {
    title: string;
    doctorName: string;
  }[];
  doctor: {
    name: string;
    specialization: string;
  };
};
