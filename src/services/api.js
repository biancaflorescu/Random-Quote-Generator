const getRandomQuotesData = async () => {
  const res = await fetch("https://api.quotable.io/random?maxLength=100");
  const data = await res.json();
  return data;
};

export { getRandomQuotesData };
