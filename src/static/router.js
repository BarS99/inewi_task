import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import LayoutBasic from "../application/layouts/LayoutBasic";
import Index from "../application/pages/Index";
import ToWatch from "../application/pages/ToWatch";
import Favorite from "../application/pages/Favorite";
import MediaView from "../application/pages/MediaView";
import Search from "../application/pages/Search";
import Page404 from "../application/pages/Page404";

const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <LayoutBasic />,
      children: [
        {
          path: "",
          element: <Index />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "to-watch",
          element: <ToWatch />,
        },
        {
          path: "media/:id",
          element: <MediaView />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
    {
      path: "/inewi_task",
      element: <Navigate to="/" />,
    },
  ]);

  return router;
};

export default Router;
