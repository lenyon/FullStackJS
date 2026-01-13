import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToogleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToogleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}
