export const Styles = {
  container: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gap: 4,
    p: 4,
  },

  card: {
    borderRadius: 4,
    // overflow: "hidden",
    transition: "all 0.35s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale: (1.08)",
      boxShadow: "0 15px 35px #b7b7db",
    },
  },

  image: {
    height: 220,
    objectFit: "cover",
    transition: "transform 0.5s ease",

    "&:hover": {
      transform: "scale(1.08)",
    },
  },

  content: {
    p: 3,
  },

  title: {
    fontWeight: 700,
    mb: 1,
    color: "#363e63",
  },

  description: {
    color: "text.secondary",
    lineHeight: 1.8,
  },
};
