/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
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
  movieListFiltersSelector,
  movieListSortSelector,
} from "../abstract/MovieContext";
import { useRecoilState, useRecoilValue } from "recoil";

const Index = () => {
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const filters = useRecoilValue(movieListFiltersSelector);
  const sort = useRecoilValue(movieListSortSelector);
  const [pagination, setPagination] = useState(1);
  const { data, loading, error, triggerFetch } = useFetch(
    `${API.url}/3/discover/movie?api_key=${API.key}&${filters}&${sort}`
  );

  const incrementPagination = () => {
    setPagination((prev) => {
      return prev++;
    });
  };

  useEffect(() => {
    if (data) {
      setMovieList((prev) => {
        return { ...prev, results: data.results };
      });
    }
  }, [data, filters, sort, setMovieList]);

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
      />
    </Container>
  );
};

export default Index;
