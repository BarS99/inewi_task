export const theme = {
  breakpoints: ["576px", "992px", "1200px", "1400px"],
  borderWidths: {
    sm: "1px",
    md: "2px",
    lg: "4px",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  colors: {
    text: "#fff",
    primary: "#52057B",
    secondary: "#892CDC",
    tertiary: "#BC6FF1",
    background: "#000",
    backgroundContrast: "#fff",
    backgroundOpacity: "rgba(0, 0, 0, 0.5)",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: ["0.75rem", "1rem", "1.25rem", "1.5rem", "2rem", "3rem", "5rem"],
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    heading: 1.4,
    body: 1.5,
    text: 1.75,
  },
  links: {
    nav: {
      ":hover": {
        textDecoration: [null, null, "underline"],
      },
    },
  },
  container: {
    md: {
      maxWidth: "992px",
    },
    lg: {
      maxWidth: "1200px",
    },
    xl: {
      maxWidth: "1400px",
    },
    full: {
      maxWidth: "1920px",
    },
  },
  forms: {
    label: {
      fontWeight: "bold",
      pb: 3,
    },
    slider: {
      my: "14px",
      py: 1,
    },
  },
  icon: {
    xs: {
      fontSize: 0,
    },
    sm: {
      fontSize: 2,
    },
    md: {
      fontSize: 3,
    },
    lg: {
      fontSize: 4,
    },
  },
  navMenu: {
    inactive: {
      transform: ["translateX(100%)", null, "none"],
      position: ["fixed", null, "static"],
      top: 0,
      right: 0,
      bottom: 0,
    },
    active: {
      transform: ["translateX(0%)", null, "none"],
      position: ["fixed", null, "static"],
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
  images: {
    main: {
      height: [400, 500, null, 650],
      objectFit: "cover",
    },
  },
  grid: {
    mediaList: {
      gridTemplateColumns: [
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(5, 1fr)",
        "repeat(6, 1fr)",
      ],
    },
    mediaView: {
      gridTemplateColumns: ["12fr", "5fr 7fr"],
    },
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      ":hover": {
        cursor: "pointer",
        backgroundColor: "secondary",
      },
    },
    secondary: {
      backgroundColor: "secondary",
      ":hover": {
        cursor: "pointer",
        backgroundColor: "primary",
      },
    },
    tertiary: {
      backgroundColor: "tertiary",
      ":hover": {
        cursor: "pointer",
        backgroundColor: "tertiary",
      },
    },
  },
  text: {
    xs: {
      fontSize: 0,
      fontWeight: "regular",
    },
    h3: {
      fontSize: [1, 2],
      fontWeight: "bold",
      lineHeight: "body",
    },
    inherit: {
      color: "inherit",
      textDecoration: "inherit",
    },
  },
  message: {
    primary: {
      border: "none",
      backgroundColor: "primary",
    },
    secondary: {
      border: "none",
      backgroundColor: "secondary",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
  },
};
