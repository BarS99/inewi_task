/** @jsxImportSource theme-ui */
import { useRecoilValue } from "recoil";
import { Message, Container, Heading } from "theme-ui";
import { favoriteListState } from "../abstract/MovieContext";
import MediaList from "../components/MediaList";

const Favorite = () => {
  const list = useRecoilValue(favoriteListState);

  return (
    <>
      <Container px={4} sx={{ variant: "container.md" }}>
        <Heading
          as="h1"
          sx={{
            textAlign: "center",
          }}
        >
          Favorite
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

export default Favorite;
