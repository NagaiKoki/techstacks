import { FC } from "react";
import styled from "@emotion/styled";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledTitle>TechStack</StyledTitle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.color.gray[200]}`,
  width: theme.width["full"],
  height: theme.height[48],
  padding: `${theme.padding[8]} ${theme.padding[16]}`,
  color: theme.color.white,
}));

const StyledTitle = styled.span(({ theme }) => ({
  color: theme.color.black,
  fontSize: theme.fontSize[24],
  fontWeight: "bold",
}));
