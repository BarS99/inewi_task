import React, { useState } from "react";
import { Box, Select } from "theme-ui";
import { useSetRecoilState } from "recoil";
import { movieListSortSelector } from "../abstract/MovieContext";

const Sort = () => {
  const setMovieListSort = useSetRecoilState(movieListSortSelector);
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    setSort(() => {
      return e.target.value;
    });

    setMovieListSort(() => {
      return `sort_by=${e.target.value}`;
    });
  };

  return (
    <Box>
      <Select name="sort_by" id="sort" value={sort} onChange={handleSort}>
        <option value="">Sort results by</option>
        <option value="popularity.desc">Popularity descending</option>
        <option value="popularity.asc">Popularity ascending</option>
        <option value="release_date.asc">Release date ascending</option>
        <option value="release_date.desc">Release date descending</option>
        <option value="vote_average.asc">Vote average ascending</option>
        <option value="vote_average.desc">Vote average descending</option>
      </Select>
    </Box>
  );
};

export default Sort;
