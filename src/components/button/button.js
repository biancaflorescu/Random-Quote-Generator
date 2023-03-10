import "./button.css";

const Button = ({ changeQuote }) => {
  return (
    <button onClick={changeQuote}>
      <span>GIVE ME ADVICE!</span>
    </button>
  );
};

export default Button;
