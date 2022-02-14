/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
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
  Message,
} from "theme-ui";
import { API } from "../../static/API";
import thumbnail from "../../static/images/thumbnail.jpg";
import { Flex } from "theme-ui";
import Score from "../components/Score";
import Actions from "../components/Actions";

const MediaView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [media, setMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortC = new AbortController();

    const fetchMedia = async () => {
      try {
        const response = await fetch(
          `${API.url}/3/movie/${id}?api_key=${API.key}`,
          { signal: abortC.signal }
        );
        if (response.ok) {
          const mediaResponse = await response.json();

          setMedia(() => {
            return mediaResponse;
          });

          setIsLoading(() => {
            return true;
          });
        }
      } catch {
      } finally {
        setIsLoading(() => {
          return false;
        });
      }
    };

    fetchMedia();

    return () => {
      abortC.abort();
    };
  }, [id]);

  return (
    <Container p={4} sx={{ variant: "container.md" }}>
      {media !== null && !isLoading ? (
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
                  media.poster_path !== null
                    ? `${API.posterLg}${media.poster_path}`
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
                {media.title}&nbsp;
                {media.release_date && (
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
                    ({media.release_date})
                  </Box>
                )}
              </Heading>
              <Box my={3}>
                <Actions item={media} />
              </Box>
              <Score
                score={(media.vote_average / 10) * 100}
                text="Community rating: "
              />
              <Flex
                mt={4}
                sx={{
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {media.genres.map((item) => {
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
                {media.overview}
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
      ) : isLoading ? (
        <Flex
          p={4}
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
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
          <Message variant="message.primary">Failed to load the data!</Message>
        </Container>
      )}
    </Container>
  );
};

export default MediaView;
