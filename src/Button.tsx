import { StyledButton } from "./Styles";
const Button = () => {
  const handleClick = (e) => {
    e.target.textContent = "OUCH";
  };

  return <StyledButton onClick={(e) => handleClick(e)}>Click me</StyledButton>;
};

export default Button;
