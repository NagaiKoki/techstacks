import { rest } from "msw";

import { mockTechIcons } from "../mockData/techIcons";

export const successFetchTechIcons = rest.get(
  "/api/v1/tech-icons",
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTechIcons));
  }
);
