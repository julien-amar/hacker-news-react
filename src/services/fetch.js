export const getTopStories = async () => {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');

  return res.json();
};

export const getItem = async id => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

  return res.json();
};
