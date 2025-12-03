export const getTitle = () => {
  return typeof process.env.title !== "undefined"
    ? process.env.title
    : "alwanalfians";
};

export const isProduction = () => {
  return (
    typeof process.env.title !== "undefined" &&
    process.env.environment === "production"
  );
};
