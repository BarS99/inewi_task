/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { Box, Label, Input } from "theme-ui";
import { API } from "../../static/API";
import Autocomplete from "./Autocomplete";

const SearchEngine = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [movieName, setMovieName] = useState("");

  const handleMovieChange = (e) => {
    e.preventDefault();

    setMovieName(() => {
      return e.target.value;
    });
  };

  useEffect(() => {
    const abortC = new AbortController();

    const fetchSearchResults = async () => {
      try {
        if (movieName.length < 3) return;

        const response = await fetch(
          `${API.url}/3/search/movie?api_key=${API.key}&query=${movieName}&limit=1`,
          {
            signal: abortC.signal,
          }
        );

        if (response.ok) {
          const list = await response.json();

          if (list?.results.length) {
            setSearchResults(() => {
              return list.results.slice(0, 8);
            });
          } else {
            setSearchResults(() => {
              return [];
            });
          }
        } else {
          throw new Error("Failed to load the movies!");
        }
      } catch (err) {}
    };

    fetchSearchResults();

    return () => {
      abortC.abort();
    };
  }, [movieName]);

  return (
    <Box>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{
          position: "relative",
        }}
      >
        <Label
          htmlFor="movie_name"
          sx={{
            display: "none",
          }}
        >
          Search a movie...
        </Label>
        <Input
          type="text"
          name="movie_name"
          id="movie_name"
          placeholder="Search a movie..."
          value={movieName}
          onChange={handleMovieChange}
          autoComplete="off"
          sx={{
            backgroundColor: "background",
            color: "text",
            fontSize: [1, null, 2],
            px: "1rem",
          }}
        />
      </Box>
      {searchResults?.length ? (
        <Box>
          <Autocomplete list={searchResults} />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SearchEngine;
