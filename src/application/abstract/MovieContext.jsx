import { atom } from "recoil";

export const movieListState = atom({
  key: "movieListState",
  default: {
    results: [],
    favorite: [],
    toWatch: [],
    filters: "",
    sort: "",
  },
});

export const genreListState = atom({
  key: "genreListState",
  default: [],
});

const setLocalStorage =
  (key) =>
  ({ onSet, setSelf }) => {
    const data = localStorage.getItem(key);
    if (data !== null) {
      setSelf(JSON.parse(data));
    }
    onSet((data) => {
      localStorage.setItem(key, JSON.stringify(data));
    });
  };

export const favoriteListState = atom({
  key: "favoriteListState",
  default: [],
  effects: [setLocalStorage("favorite")],
});

export const toWatchListState = atom({
  key: "toWatchListState",
  default: [],
  effects: [setLocalStorage("toWatch")],
});
