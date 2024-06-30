
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import creditCardType from 'credit-card-type';
import { paymentSchema } from "@/validators/payment";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

type Input = z.infer<typeof paymentSchema>;

const Payment = () => {
  const form = useForm<Input>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "",
      cvv: "",
      expiry: ""
    },
  });

  const { setValue, formState: { errors } } = form;
  const router = useRouter();

  const [cardType, setCardType] = React.useState<string | null>(null);

  const detectCardType = (cardNumber: string) => {
    const cardType = creditCardType(cardNumber)[0];
    return cardType?.niceType || 'Unknown';
  };

  function onSubmit(data: Input) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
          <CardDescription>Start your journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="text-black">Card Number</FormLabel>
                      {cardType && <p className="flex"><CreditCard className="mx-3" />{cardType}</p>}
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Enter your Card Number..."
                        {...field}
                        onChange={(e) => {
                          if (e.target.value.length <= 16) {
                            setValue('cardNumber', e.target.value);
                            const cardType = detectCardType(e.target.value);
                            setCardType(cardType);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage>{errors.cardNumber?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">CVV</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your CVV..."
                        {...field}
                        onChange={(e) => {
                          if (e.target.value.length <= 3) {
                            setValue('cvv', e.target.value);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage>{errors.cvv?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Expiry</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your expiry..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{errors.expiry?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <div className="flex justify-between mt-7">
                <Button type="button" onClick={() => router.push('/')}>
                  Back
                </Button>
                <Button type="submit" className="bg-green-600">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
