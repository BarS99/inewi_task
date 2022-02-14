/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "theme-ui";
import { API } from "../../static/API";
import thumbnail from "../../static/images/thumbnail.jpg";

const Autocomplete = ({ list }) => {
  return (
    <Box
      mb={4}
      sx={{
        backgroundColor: "background",
        color: "text",
        borderWidth: "sm",
        borderTopWidth: 0,
        borderStyle: "solid",
        borderColor: "backgroundContrast",
        maxHeight: "calc(100vh - 15rem)",
        overflowY: "auto",
      }}
    >
      {list.map((item) => {
        return (
          <Flex
            as={Link}
            to={`/media/${item.id}`}
            py={2}
            px={3}
            key={item.id}
            sx={{
              variant: "text.inherit",
              fontSize: [1, 2],
              lineHeight: "body",
              alignItems: "center",
              ":hover": {
                backgroundColor: "primary",
              },
            }}
          >
            <Image
              src={
                item.poster_path !== null
                  ? `${API.posterSm}${item.poster_path}`
                  : thumbnail
              }
              alt={item.title}
              mr={3}
              sx={{
                borderRadius: "sm",
                borderWidth: "sm",
                borderColor: "text",
                borderStyle: "solid",
                overflow: "hidden",
                display: "block",
                aspectRatio: "500 / 750",
                objectFit: "cover",
                width: "2rem",
                flexShrink: 0,
              }}
            />
            <Box>{item.title}</Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Autocomplete;
