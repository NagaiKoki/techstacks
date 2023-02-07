import { FC } from "react";
import styled from "@emotion/styled";

import { SearchTechForm } from "@/features/TechSearch/components/TechSearchForm";

export const Home: FC = () => {
  return (
    <div>
      <TechFormWrapper>
        <SearchTechForm />
      </TechFormWrapper>
    </div>
  );
};

export default Home;

const TechFormWrapper = styled.div(({ theme }) => ({
  marginTop: theme.margin[32],
}));
