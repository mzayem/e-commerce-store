"use client";

import { Product } from "@/public/type";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100">
          <div className="flex gap-x-6 justify-center"></div>
        </div>
      </div>
    </div>
  );
}