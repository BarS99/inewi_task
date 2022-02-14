/** @jsxImportSource theme-ui */
import { useRecoilValue } from "recoil";
import { Message, Container, Heading } from "theme-ui";
import { toWatchListState } from "../abstract/MovieContext";
import MediaList from "../components/MediaList";

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
        <Container p={4} sx={{ variant: "container.md" }}>
          <Message variant="message.primary">The list is empty!</Message>
        </Container>
      )}
    </>
  );
};

export default ToWatch;
