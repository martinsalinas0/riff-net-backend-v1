import { Router } from "express";

const userRouter = Router();

// route ---> api/v1/user/
userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/new", createNewUser);

export default userRouter;
