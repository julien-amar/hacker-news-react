export const getHost = (url) => {
  try {
    return new URL(url).hostname;
  } catch (error) {
    return url;
  }
};
