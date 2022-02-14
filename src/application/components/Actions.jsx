/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { Button, Flex } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTv } from "@fortawesome/free-solid-svg-icons";
import { favoriteListState, toWatchListState } from "../abstract/MovieContext";
import { useRecoilState } from "recoil";

const Actions = ({ item }) => {
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteListState);
  const [toWatchList, setToWatchList] = useRecoilState(toWatchListState);
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [toWatchActive, setToWatchActive] = useState(false);

  const itemId = item.id;

  useEffect(() => {
    const checkActive = (list) => {
      return (
        list.filter((element) => {
          return element.id === itemId;
        }).length > 0
      );
    };

    const isActiveFavorite = checkActive(favoriteList);
    const isActiveToWatch = checkActive(toWatchList);

    if (isActiveFavorite !== favoriteActive) {
      setFavoriteActive(() => {
        return isActiveFavorite;
      });
    }

    if (isActiveToWatch !== toWatchActive) {
      setToWatchActive(() => {
        return isActiveToWatch;
      });
    }
  }, [itemId, favoriteList, toWatchList, favoriteActive, toWatchActive]);

  return (
    <Flex
      sx={{
        gap: "0.5rem",
      }}
    >
      <Button
        p={2}
        sx={{
          variant: favoriteActive ? "buttons.tertiary" : "buttons.primary",
        }}
        onClick={(e) => {
          e.stopPropagation();

          if (favoriteActive) {
            setFavoriteList((prev) => {
              const newList = prev.filter((element) => {
                return element.id !== item.id;
              });

              return newList;
            });
          } else {
            setFavoriteList((prev) => {
              return [...prev, item];
            });
          }
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          sx={{
            variant: "icon.xs",
          }}
        />
      </Button>
      <Button
        p={2}
        sx={{
          variant: toWatchActive ? "buttons.tertiary" : "buttons.primary",
        }}
        onClick={(e) => {
          e.stopPropagation();

          if (toWatchActive) {
            setToWatchList((prev) => {
              const newList = prev.filter((element) => {
                return element.id !== item.id;
              });

              return newList;
            });
          } else {
            setToWatchList((prev) => {
              return [...prev, item];
            });
          }
        }}
      >
        <FontAwesomeIcon
          icon={faTv}
          sx={{
            variant: "icon.xs",
          }}
        />
      </Button>
    </Flex>
  );
};

export default Actions;
