import { create } from "zustand";

 type ProfileType = {
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

type UserType = {
  profile: ProfileType | null;
  token: string;
  setToken: (token: string) => void;
  setProfile: (profile: ProfileType) => void;
};

const useUser = create<UserType>((set) => ({
  token: "",
  name: "",
  profile: null,
  setProfile: (profile: ProfileType) => set({ profile: profile }),
  setToken: (token: string) => set({ token: token }),
}));

export default useUser;
