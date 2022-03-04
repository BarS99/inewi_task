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

export const genreListSelector = selector({
  key: "genreListSelector",
  get: ({ get }) => {
    const result = get(genreListState);

    return result;
  },
  set: ({ set }, value) => {
    set(genreListState, value);
  },
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

export const favoriteListSelector = selector({
  key: "favoriteListSelector",
  get: ({ get }) => {
    const result = get(favoriteListState);

    return result;
  },
  set: ({ set }, value) => {
    set(favoriteListState, value);
  },
});

export const toWatchListState = atom({
  key: "toWatchListState",
  default: [],
  effects: [setLocalStorage("toWatch")],
});

export const toWatchListSelector = selector({
  key: "toWatchListSelector",
  get: ({ get }) => {
    const result = get(toWatchListState);

    return result;
  },
  set: ({ set }, value) => {
    set(toWatchListState, value);
  },
});
