"use client";

import React from "react";
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
