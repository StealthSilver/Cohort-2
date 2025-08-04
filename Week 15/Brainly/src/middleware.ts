import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleware  = (req: Request, res: Response, next: NextFunction)=>{
    try {
        const header = req.headers["authorization"];
        if (!header) {
          return res.status(403).json({ message: "No auth token provided" });
        }
        const decoded = jwt.verify(header, JWT_PASSWORD);
        // @ts-ignore
        req.userId = decoded.id;
        next();
      } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
}
