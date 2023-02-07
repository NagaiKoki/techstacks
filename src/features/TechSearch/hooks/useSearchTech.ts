import { useCallback, useState } from "react";

import { TechIconType } from "@/types/techIcon";
import { fetchTechIcons } from "../apis";

export const useSearchTech = () => {
  const [keyword, setKeyword] = useState("");
  const [techIcons, setTechIcons] = useState<TechIconType[]>([]);

  const handleOnChangeKeyword = useCallback(async (keyword: string) => {
    setKeyword(keyword);
    const response = await fetchTechIcons();
    setTechIcons(response);
  }, []);

  console.log(techIcons);

  return {
    keyword,
    techIcons,
    onChangeKeyword: handleOnChangeKeyword,
  };
};
