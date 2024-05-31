"use client";

import { useEffect, useState } from "react";

interface CurrancyProps {
  value: string | number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Currency({ value }: CurrancyProps) {
  const [isMonuted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMonuted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
