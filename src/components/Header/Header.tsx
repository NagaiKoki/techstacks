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
  color: theme.color.white,
  width: theme.width["full"],
  height: theme.height[64],
  padding: `${theme.padding[8]} ${theme.padding[16]}`,
}));

const StyledTitle = styled.span(({ theme }) => ({
  color: theme.color.black,
  fontSize: theme.fontSize[24],
}));
