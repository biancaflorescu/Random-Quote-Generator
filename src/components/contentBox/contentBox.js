import Button from "../button/button";
import Quote from "../quote/quote";
import "./contentBox.css";

const ContentBox = () => {
  return (
    <div className="content-box-container">
      <Quote />
      <Button />
    </div>
  );
};

export default ContentBox;
