import { Request, Response, NextFunction } from "express";
import { redisClient } from "../database/client";

interface IUserData {
  email: string;
  currentCharacter: number;
}

export const checkCharacterLimit = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.email;
  const textLength = req.body.length;

  try {
    // Find user with email : req.email
    const userData = await redisClient.get(`user:${email}`);

    // If user found, check character limit, if >80k, return 402, else, update characterUsage for the next request
    if (userData) {
      const parseUserData: IUserData = JSON.parse(userData);

      if (parseUserData.currentCharacter + textLength > 80000) {
        res.status(402).json({ message: "Character limit exceeded for today" });
        return;
      }

      parseUserData.currentCharacter += textLength;

      // update user on redis with correct infos
      await redisClient.set(`user:${email}`, JSON.stringify(parseUserData));

      // if not user found, create user on redis and init character usage base to textLength
      // if textLength exceed 80 000 for the first time return 402
    } else {
      if (textLength > 80000) {
        res.status(402).json({ message: "Character limit exceeded for today" });
        return;
      }

      const newUserData: IUserData = {
        email: email!,
        currentCharacter: textLength,
      };

      await redisClient.set(`user:${email}`, JSON.stringify(newUserData), {
        EX: 86400, // 24 hours
      });
    }
    // if all good, next middleware (justify text)
    next();
  } catch (err) {
    console.error("Error interacting with Redis:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
