import { NextFunction, Response } from "express"
import { Role } from "../models/userModel"
import { AuthRequest } from "./authMiddleware"

export const requireRole = (roles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized"
      })
    }
    const hasRole = roles.some((role) => req.user.role?.includes(role))
    if (!hasRole) {
      return res.status(403).json({
        message: `Require ${roles} role`
      })
    }
    next()
  }
}