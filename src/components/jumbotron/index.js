// We are using compond components
import React from "react";
import {
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from "./styles/jumbotron.js";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children} </SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane>{children}</Pane>;
};
