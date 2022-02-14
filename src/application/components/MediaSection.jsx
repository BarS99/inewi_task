/** @jsxImportSource theme-ui */
import { useState } from "react";
import MediaList from "../components/MediaList";
import {
  Container,
  Box,
  Heading,
  Select,
  Grid,
  Spinner,
  Flex,
  Message,
} from "theme-ui";
import { useSetRecoilState } from "recoil";
import { movieListState } from "../abstract/MovieContext";

const MediaSection = ({ list, title, isLoading }) => {
  const setMovieList = useSetRecoilState(movieListState);
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    setSort(() => {
      return e.target.value;
    });

    setMovieList((prev) => {
      if (e.target.value.length === 0) {
        return { ...prev, sort: "" };
      }
      return { ...prev, sort: `sort_by=${e.target.value}` };
    });
  };

  return (
    <Box as="section">
      <Container
        sx={{
          variant: "container.full",
        }}
        px={4}
      >
        <Grid
          gap={4}
          sx={{
            gridTemplateColumns: ["1fr", "2fr 1fr"],
            position: "relative",
            zIndex: 5,
          }}
        >
          <Heading as="h1">{title}</Heading>
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
        </Grid>
      </Container>

      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {list.results.length > 0 && !isLoading ? (
          <MediaList list={list.results} title="Trending now" />
        ) : isLoading ? (
          <Flex
            p={4}
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
              position: "absolute",
              backgroundColor: "background",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Spinner />
          </Flex>
        ) : (
          <Container
            sx={{
              variant: "container.full",
            }}
            p={4}
          >
            <Message variant="message.primary">
              Failed to load the data!
            </Message>
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default MediaSection;
