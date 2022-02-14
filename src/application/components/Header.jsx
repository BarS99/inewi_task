/** @jsxImportSource theme-ui */
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex, NavLink, Box, Heading } from "theme-ui";
import { NavLink as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBars,
  faStar,
  faTv,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [menu] = useState([
    {
      icon: faSearch,
      text: "Search",
      path: "/search",
    },
    {
      icon: faTv,
      text: "To watch",
      path: "/to-watch",
    },
    {
      icon: faStar,
      text: "Favorite",
      path: "/favorite",
    },
  ]);

  const toggleMenu = () => {
    setMenuActive((prev) => {
      return !prev;
    });
  };

  useLayoutEffect(() => {
    setMenuActive(() => {
      return false;
    });
  }, [navigate]);

  return (
    <Box
      as="header"
      sx={{
        background: "background",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 200,
          pointerEvents: [menuActive ? "initial" : "none", null, "none"],
          background: "#000",
          opacity: [menuActive ? 0.8 : 0, null, 0],
          transition: "opacity 0.6s",
        }}
        onClick={toggleMenu}
      ></Box>
      <Container p={4} sx={{ variant: "container.md" }}>
        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              color: "text",
              textDecoration: "none",
            }}
            as={RouterLink}
            to="/"
          >
            <FontAwesomeIcon
              icon={faVideo}
              sx={{
                variant: "icon.md",
                mr: "1rem",
              }}
            />
            <Box
              sx={{
                fontSize: 3,
                fontWeight: "bold",
              }}
            >
              INEWI
            </Box>
          </Flex>

          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Flex
              as="nav"
              sx={{
                variant: menuActive ? "navMenu.active" : "navMenu.inactive",
                transition: "transform 0.6s",
                background: ["background", null, "transparent"],
                width: ["250px", null, "auto"],
                p: [4, null, 0],
                flexDirection: ["column", null, "row"],
                zIndex: 200,
                borderWidth: 0,
                borderStyle: "solid",
                borderLeftWidth: ["sm", null, 0],
                borderColor: "text",
              }}
            >
              <Heading
                sx={{
                  mt: 0,
                  mb: 4,
                  pb: 3,
                  borderWidth: 0,
                  borderStyle: "solid",
                  borderBottomWidth: "md",
                  borderColor: "text",
                  display: ["block", null, "none"],
                }}
              >
                Menu
              </Heading>
              {menu.map((item, index) => {
                return (
                  <NavLink
                    to={item.path}
                    as={RouterLink}
                    sx={{
                      color: "#fff !important",
                      display: "flex",
                      alignItems: "center",
                      fontSize: 1,
                      ml: [null, null, "1rem"],
                      mb: ["2rem", null, 0],
                      fontWeight: "regular",
                    }}
                    key={index}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      sx={{
                        variant: "icon.sm",
                        mr: "0.5em",
                      }}
                    />
                    <div>{item.text}</div>
                  </NavLink>
                );
              })}
            </Flex>
            <FontAwesomeIcon
              icon={faBars}
              sx={{
                display: [null, null, "none"],
                variant: "icon.md",
              }}
              onClick={toggleMenu}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
