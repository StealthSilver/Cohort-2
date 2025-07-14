import { atom } from "recoil";

export const counterAtom = atom({
  key: "counterAtom", // unique ID
  default: 0, // default value
});
