/** @jsxImportSource theme-ui */
import { useRecoilValue } from "recoil";
import { Container, Heading } from "theme-ui";
import { toWatchListState } from "../abstract/MovieContext";
import MediaList from "../components/MediaList";
import Error from "../components/Error";

const ToWatch = () => {
  const list = useRecoilValue(toWatchListState);

  return (
    <>
      <Container px={4} sx={{ variant: "container.md" }}>
        <Heading
          as="h1"
          sx={{
            textAlign: "center",
          }}
        >
          To Watch
        </Heading>
      </Container>
      {list?.length ? (
        <MediaList list={list} />
      ) : (
        <Error message="The list is empty!" size="md" />
      )}
    </>
  );
};

export default ToWatch;
