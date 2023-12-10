export type LoginBodyType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  profile: {
    id: string;
    name: string;
    diseases: {
      title: string;
      doctorData: string;
      doctorSpecialization: string;
    }[];
    doctorDto: {
      name: string;
      specialization: string;
    };
  };
};
