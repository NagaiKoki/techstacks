import { ResponseTechIcons } from "@/types/techIcon";

// FIXME: フェッチ関数を用意して、そこでちゃんと型安全やエラーハンドリングを担保してあげる
export const fetchTechIcons = async (): Promise<ResponseTechIcons> => {
  try {
    const response = await fetch("/api/v1/tech-icons", { method: "GET" });
    if (!response.ok) {
      throw new Error("error");
    }
    const json = (await response.json()) as ResponseTechIcons;
    return json;
  } catch (e: any) {
    throw new Error(e.message as string);
  }
};
