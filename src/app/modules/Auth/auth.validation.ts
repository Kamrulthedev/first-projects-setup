import { z } from "zod";

const loginValidatoinSchema = z.object({
  body: z.object({
    id: z.string({ required_error: "Id is required." }),
    password: z.string({ required_error: "Passerod is required. " }),
  }),
});


const changePasswordValidatoinSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: "Old Password is required",
    }),
    newPassword: z.string({ required_error: "Passerod is required. " }),
  }),
});

export const AuthValidation = {
  loginValidatoinSchema,
  changePasswordValidatoinSchema
};
