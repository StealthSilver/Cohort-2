import { atom } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

// selectors (to be done is a seperate folder selectors)
// evenSelector depends onteh counter atom
export const evenSelector = selector({
  key: "isEvenSelector",
  get: function ({ get }) {
    const isEven = currentCount % 2 == 0;
    return;
  },
});
