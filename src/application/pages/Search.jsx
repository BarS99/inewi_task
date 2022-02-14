/** @jsxImportSource theme-ui */
import image576 from "../../static/images/mainpage_576.jpg";
import image992 from "../../static/images/mainpage_992.jpg";
import image1920 from "../../static/images/mainpage_1920.jpg";
import { Container, Image, Box, Flex } from "theme-ui";
import SearchEngine from "../components/SearchEngine";

const Search = () => {
  return (
    <Container sx={{ variant: "container.full" }}>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src={image1920}
          srcSet={`${image576} 576w, ${image992} 992w, ${image1920} 1920w`}
          sizes="(max-width: 576px) 576w, (max-width: 992px) 992w, 1920w"
          sx={{
            variant: "images.main",
          }}
        />
        <Flex
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "flexStart",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              variant: "container.md",
            }}
            p={4}
          >
            <SearchEngine />
          </Container>
        </Flex>
      </Box>
    </Container>
  );
};

export default Search;
