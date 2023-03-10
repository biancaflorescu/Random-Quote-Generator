import Button from "../button/button";
import Quote from "../quote/quote";
import { useEffect, useState } from "react";
import { getRandomQuotesData } from "../../services/api";
import "./contentBox.css";

const ContentBox = () => {
  const [quote, setQuote] = useState("");

  async function getData() {
    const randomQuote = await getRandomQuotesData();
    setQuote(randomQuote.content);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="content-box-container">
      <Quote quote={quote} />
      <Button changeQuote={getData} />
    </div>
  );
};

export default ContentBox;
