/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../../static/config";
import { Container, Image, Box } from "theme-ui";
import image576 from "../../static/images/mainpage_576.jpg";
import image992 from "../../static/images/mainpage_992.jpg";
import image1920 from "../../static/images/mainpage_1920.jpg";
import Filters from "../components/Filters";
import MediaSection from "../components/MediaSection";
import useFetch from "../hooks/useFetch";
import {
  movieListState,
  movieListFiltersAsParamsSelector,
  movieListSortSelector,
} from "../abstract/MovieContext";
import { useRecoilState, useRecoilValue } from "recoil";

const Index = () => {
  const location = useLocation;
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const filters = useRecoilValue(movieListFiltersAsParamsSelector);
  const sort = useRecoilValue(movieListSortSelector);
  const [pagination, setPagination] = useState(1);
  const { data, loading, error } = useFetch(
    `${API.url}/3/discover/movie?api_key=${API.key}${
      filters?.length ? "&" + filters : ""
    }${sort?.length ? "&sort_by=" + sort : ""}&page=${pagination}`
  );

  const incrementPagination = () => {
    setPagination((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    return () => {
      setMovieList(() => {
        return [];
      });
    };
  }, [location, setMovieList]);

  useEffect(() => {
    if (data) {
      setMovieList((prev) => {
        let list = [];
        if (prev.results && data.page > 1) {
          list = [...prev.results, ...data.results];
        } else {
          list = [...data.results];
        }

        return { ...prev, results: list };
      });
    }
  }, [data, setMovieList]);

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
        list={movieList.results}
        loading={loading}
        error={error}
        incrementPagination={incrementPagination}
      />
    </Container>
  );
};

export default Index;
