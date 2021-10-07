import express from "express";
import { users } from "../database";
import { LoginFail, LoginSuccess } from "../models/auth";

const router = express.Router();

router.post("/auth/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.has(username) && users.get(username) === password) {
    const data: LoginSuccess = {
      access_token: "access-token",
      token_type: "bearer",
    };
    res.cookie("auth", "test");
    res.json(data);
  } else {
    const data: LoginFail = {
      detail: [
        {
          msg: "Wrong username or password",
        },
      ],
    };
    res.status(401);
    res.json(data);
  }
});

router.post("/auth/logout", (req, res) => {
  res.cookie("auth", "deleted");
  res.sendStatus(200);
});

export default router;
