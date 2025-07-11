/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { Elysia } from "elysia";
import { userRouter } from "../features/users/userRouter";
export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.app.group("/api/v1", (app) => {
      return app.use(userRouter);
    });
  }

  public start(): void {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
    this.app.listen(port);
    console.log(
      `🦊 Elysia is running! API is at http://localhost:${port}/api/v1/users`
    );
  }
}
