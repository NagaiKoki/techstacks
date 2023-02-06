import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

import { Header } from "@/components/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledMain>
      <Header />
      {children}
    </StyledMain>
  );
};

const StyledMain = styled.main(({ theme }) => ({
  margin: `0 auto`,
  maxWidth: theme.width.maxWidth,
}));
