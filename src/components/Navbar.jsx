import Button from "./Button";
import "./Navbar.css";

export function Navbar(props) {
  return (
    <nav>
      <a href="ironhack.com">Home</a>
      <Button
        linkTo="https://www.linkedin.com"
        prompt="Go to LinkedIn, my friend"
      />
      <Button
        linkTo="https://www.github.com"
        prompt="Go to Github, my friend"
      />
      {props.children}
    </nav>
  );
}
