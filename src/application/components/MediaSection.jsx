/** @jsxImportSource theme-ui */
import { Container, Box, Heading, Grid, Spinner, Flex, Button } from "theme-ui";
import MediaList from "../components/MediaList";
import Error from "./Error";
import Sort from "./Sort";

const MediaSection = ({ list, title, loading, error, incrementPagination }) => {
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
          <Sort />
        </Grid>
      </Container>

      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {list?.length > 0 && <MediaList list={list} title="Trending now" />}

        {!loading && (
          <Box
            pb={4}
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              p={2}
              sx={{
                variant: "buttons.primary",
              }}
              onClick={incrementPagination}
            >
              Load more
            </Button>
          </Box>
        )}

        {loading && (
          <Flex
            p={4}
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Spinner />
          </Flex>
        )}

        {error !== null && !loading && <Error message={error} />}
      </Box>
    </Box>
  );
};

export default MediaSection;
