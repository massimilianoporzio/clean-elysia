/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { Elysia } from "elysia";

const userRouter = new Elysia({
  prefix: "/users",
});
userRouter
  .get("/", () => "List of users")
  .get("/:id", ({ params }) => `User with ID: ${params.id}`)
  .post("/", ({ body }) => `User created with data: ${JSON.stringify(body)}`)
  .put(
    "/:id",
    ({ params, body }) =>
      `User with ID: ${params.id} updated with data: ${JSON.stringify(body)}`
  )
  .delete("/:id", ({ params }) => `User with ID: ${params.id} deleted`);

export { userRouter };
