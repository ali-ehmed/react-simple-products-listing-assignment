
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

import { Input } from "@/components/ui/input";
import React from "react";
import { CreditCard } from "lucide-react";
import PageTitle from "@/components/page-title";
import PaymentForm from "@/components/payment-form";


const Payment = () => {


  return (
    <>
      <PageTitle title="Payment" />
      <section className='mx-auto max-w-6xl px-4 py-6'>
        <PaymentForm />
      </section>
    </>
  );
};

export default Payment;
