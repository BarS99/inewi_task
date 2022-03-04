/** @jsxImportSource theme-ui */
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Image,
  Heading,
  Paragraph,
  Button,
  Badge,
  Spinner,
} from "theme-ui";
import { API } from "../../static/config";
import thumbnail from "../../static/images/thumbnail.jpg";
import { Flex } from "theme-ui";
import Score from "../components/Score";
import Actions from "../components/Actions";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";

const MediaView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const { data, loading, error } = useFetch(
    `${API.url}/3/movie/${id}?api_key=${API.key}`
  );

  return (
    <Container p={4} sx={{ variant: "container.md" }}>
      {data !== null && !loading && (
        <Box>
          <Grid
            gap={4}
            sx={{
              variant: "grid.mediaView",
            }}
          >
            <Box>
              <Image
                src={
                  data.poster_path !== null
                    ? `${API.posterLg}${data.poster_path}`
                    : thumbnail
                }
                sx={{
                  borderRadius: "md",
                  borderWidth: "sm",
                  borderColor: "text",
                  borderStyle: "solid",
                  overflow: "hidden",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Heading
                as="h1"
                mb={3}
                sx={{
                  fontSize: [3, 4],
                }}
              >
                {data.title}&nbsp;
                {data.release_date && (
                  <Box
                    as="span"
                    mt={1}
                    sx={{
                      fontWeight: "light",
                      lineHeight: "heading",
                      display: "block",
                      fontSize: [1, 2],
                    }}
                  >
                    ({data.release_date})
                  </Box>
                )}
              </Heading>
              <Box my={3}>
                <Actions item={data} />
              </Box>
              <Score
                score={(data.vote_average / 10) * 100}
                text="Community rating: "
              />
              <Flex
                mt={4}
                sx={{
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {data.genres?.map((item) => {
                  return (
                    <Badge
                      p={2}
                      key={item.id}
                      sx={{
                        backgroundColor: "secondary",
                        fontSize: 1,
                      }}
                    >
                      {item.name}
                    </Badge>
                  );
                })}
              </Flex>
              <Paragraph
                mt={4}
                sx={{
                  fontSize: 2,
                }}
              >
                {data.overview}
              </Paragraph>
            </Box>
          </Grid>
          <Flex
            mt={4}
            sx={{
              justifyContent: "center",
            }}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();

                navigate(-1);
              }}
              sx={{
                variant: "primary.buttons",
              }}
            >
              Previous page
            </Button>
          </Flex>
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

      {data === null && !loading && <Error message={error} />}
    </Container>
  );
};

export default MediaView;
