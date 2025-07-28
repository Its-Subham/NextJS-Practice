"use client";
import { useRouter } from "next/navigation";

export default function OrderPlace() {
    const router = useRouter();
    const handleOrder = () => {
        router.push("/product");
    }
  return <>
  <h1>Order Place</h1>
  <button onClick={handleOrder}>Order Place 1</button>
  </>;
}
