import { atom, selector } from "recoil";

export const movieListState = atom({
  key: "movieListState",
  default: [],
});

export const movieListSelector = selector({
  key: "movieListSelector",
  get: ({ get }) => {
    const result = get(movieListState);

    return result;
  },
});

export const movieListFiltersState = atom({
  key: "movieListFiltersState",
  default: "",
});

export const movieListFiltersSelector = selector({
  key: "movieListFiltersSelector",
  get: ({ get }) => {
    const result = get(movieListFiltersState);

    return result;
  },
  set: ({ set }, value) => {
    set(movieListFiltersState, value);
  },
});

export const movieListSortState = atom({
  key: "movieListSortState",
  default: "",
});

export const movieListSortSelector = selector({
  key: "movieListSortSelector",
  get: ({ get }) => {
    const result = get(movieListSortState);

    return result;
  },
  set: ({ set }, value) => {
    set(movieListSortState, value);
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
