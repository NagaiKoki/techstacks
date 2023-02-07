import { FC } from "react";
import styled from "@emotion/styled";

import { TextInput } from "@/components/TextInput";
import { useSearchTech } from "@/features/TechSearch/hooks";

export const SearchTechForm: FC = () => {
  const { keyword, onChangeKeyword } = useSearchTech();
  return (
    <Wrapper>
      <TextInput
        placeholder="react"
        value={keyword}
        size="md"
        onChange={(e) => onChangeKeyword(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  background: theme.color.white,
}));
