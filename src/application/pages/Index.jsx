/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { API } from "../../static/API";
import { Container, Image, Box } from "theme-ui";
import image576 from "../../static/images/mainpage_576.jpg";
import image992 from "../../static/images/mainpage_992.jpg";
import image1920 from "../../static/images/mainpage_1920.jpg";
import Filters from "../components/Filters";
import MediaSection from "../components/MediaSection";
import { useRecoilState } from "recoil";
import { movieListState } from "../abstract/MovieContext";

const Index = () => {
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [isLoading, setIsLoading] = useState(true);
  const { filters, sort } = movieList;

  useEffect(() => {
    const abortC = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(() => {
          return true;
        });

        const response = await fetch(
          `${API.url}/3/discover/movie?api_key=${API.key}&${filters}&${sort}`,
          { signal: abortC.signal }
        );
        if (response.ok) {
          const list = await response.json();

          setMovieList((prev) => {
            return { ...prev, results: list.results };
          });
        } else {
          throw new Error("Failed to load the movies!");
        }
      } catch {
      } finally {
        setIsLoading(() => {
          return false;
        });
      }
    };

    fetchMovies();

    return () => {
      abortC.abort();
    };
  }, [filters, sort, setMovieList]);

  return (
    <Container sx={{ variant: "container.full" }}>
      <Image
        src={image1920}
        srcSet={`${image576} 576w, ${image992} 992w, ${image1920} 1920w`}
        sizes="(max-width: 576px) 576w, (max-width: 992px) 992w, 1920w"
        sx={{
          variant: "images.main",
        }}
      />
      <Box
        sx={{
          mt: "-15rem",
        }}
      >
        <Filters />
      </Box>
      <MediaSection
        title="Trending now"
        list={movieList}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Index;
