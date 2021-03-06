/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from "react";
import { Label, Select, Box, Container, Grid, Heading, Button } from "theme-ui";
import { useRecoilState } from "recoil";
import {
  genreListSelector,
  movieListFiltersSelector,
} from "../abstract/MovieContext";
import { API } from "../../static/config";
import useFetch from "../hooks/useFetch";

const generateYears = (start, end) => {
  const years = [];

  for (let i = end; i >= start; i--) {
    years.push(i);
  }

  return years;
};

const Filters = () => {
  const [movieListFilters, setMovieListFilters] = useRecoilState(
    movieListFiltersSelector
  );
  const [genreList, setGenreList] = useRecoilState(genreListSelector);
  const { data } = useFetch(`${API.url}/3/genre/movie/list?api_key=${API.key}`);

  const [genre, setGenre] = useState(movieListFilters.with_genres);
  const [year, setYear] = useState(movieListFilters.year);
  const [includeAdult, setIncludeAdult] = useState(
    movieListFilters.include_adult
  );
  const button = useRef(null);

  const submit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const result = [];

    for (const key of data.keys()) {
      result[key] = data.get(key);
    }

    setMovieListFilters(() => {
      return result;
    });
  };

  useEffect(() => {
    if (data) {
      setGenreList(() => {
        return data.genres;
      });
    }
  }, [data, setGenreList]);

  return (
    <Container
      sx={{
        variant: "container.md",
      }}
      p={4}
    >
      <Box
        as="section"
        p={[3, 4]}
        sx={{
          borderWidth: "sm",
          borderStyle: "solid",
          borderColor: "backgroundContrast",
          position: "relative",
          backdropFilter: "blur(8px)",
          backgroundColor: "backgroundOpacity",
        }}
      >
        <Heading mb={4}>Filters</Heading>
        <Box as="form" onSubmit={submit}>
          <Grid columns={[1, 2, 3]} gap={[3, null, 4]}>
            <Box>
              <Label htmlFor="genre">Genre</Label>
              <Select
                name="with_genres"
                id="genre"
                mb={3}
                value={genre}
                onChange={(e) => {
                  setGenre(() => {
                    return e.target.value;
                  });
                  button?.current.click();
                }}
              >
                <option value="">All</option>
                {genreList.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box>
              <Label htmlFor="year">Year</Label>
              <Select
                name="year"
                id="year"
                mb={3}
                value={year}
                onChange={(e) => {
                  setYear(() => {
                    return e.target.value;
                  });
                  button?.current.click();
                }}
              >
                <option value="">All</option>
                {generateYears(1900, new Date().getFullYear()).map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box>
              <Label htmlFor="include_adult">Include adult</Label>
              <Select
                name="include_adult"
                id="include_adult"
                mb={3}
                value={includeAdult}
                onChange={(e) => {
                  setIncludeAdult(() => {
                    return e.target.value;
                  });
                  button?.current.click();
                }}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </Select>
            </Box>
            <Button
              mt={3}
              sx={{
                display: "none",
              }}
              ref={button}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Filters;
