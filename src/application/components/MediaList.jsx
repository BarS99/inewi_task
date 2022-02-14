/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";
import Media from "./Media";

const MediaList = ({ list }) => {
  return (
    <Grid
      p={4}
      gap={[3, 4]}
      sx={{
        variant: "grid.mediaList",
      }}
    >
      {list.map((item) => {
        return <Media item={item} key={item.id} />;
      })}
    </Grid>
  );
};

export default MediaList;
