/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from "react";
import { Label, Select, Box, Container, Grid, Heading, Button } from "theme-ui";
import { useRecoilState, useSetRecoilState } from "recoil";
import { genreListState, movieListState } from "../abstract/MovieContext";
import { API } from "../../static/API";

const generateYears = (start, end) => {
  const years = [];

  for (let i = end; i >= start; i--) {
    years.push(i);
  }

  return years;
};

const Filters = () => {
  const setMovieList = useSetRecoilState(movieListState);
  const [genreList, setGenreList] = useRecoilState(genreListState);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [includeAdult, setIncludeAdult] = useState("false");
  const button = useRef(null);

  const submit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const paramsString = new URLSearchParams(data).toString();

    setMovieList((prev) => {
      return { ...prev, filters: paramsString };
    });
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${API.url}/3/genre/movie/list?api_key=${API.key}`
        );
        if (response.ok) {
          const list = await response.json();

          setGenreList((prev) => {
            return [...list.genres];
          });
        } else {
          throw new Error("Failed to load the movies!");
        }
      } catch {}
    };

    fetchGenres();
  }, [setGenreList]);

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
