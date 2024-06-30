import { z } from "zod";

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .length(16, { message: "Card Number should be exactly 16 characters" })
    .regex(/^\d+$/, { message: "Card Number should only contain digits" }),
  expiry: z
    .string()
    .min(5)
    .max(5)
    .regex(/^\d{2}\/\d{2}$/, { message: "Invalid expiry [month]/[year]" }),
  cvv: z
    .string()
    .length(3, { message: "CVV must be exactly 3 characters" })
    .regex(/^\d+$/, { message: "CVV should only contain digits" }),
});
