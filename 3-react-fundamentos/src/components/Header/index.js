import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "../context/ThemeContext";

import Title from "../Title";

export default function Header(props) {
  const { onToogleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>JStack</Title>
      <Button onClick={onToogleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}
