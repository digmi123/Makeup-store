"use client";
import { useCart } from "@/app/providers/CartProvider";
import { Input } from "@/components/ui/input";
import CheckoutItem from "@/components/CheckoutItem";
import { Button } from "@/components/ui/button";
import BillingInformation from "@/components/BillingInformation";
import axios from "axios";

export default function Checkout() {
  const { loading, cartItems } = useCart();
  console.log(cartItems[0]);

  const handleOrder = async () => {
    const createdOrder = await axios.post("/api/product/order");
    console.log({ createdOrder });
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="grid lg:grid-cols-[auto_auto] grid-cols-[1fr] grid-rows-[auto_auto] gap-x-6 py-3 px-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold ">Shopping Bag</h1>
        {cartItems?.map((item) => {
          return <CheckoutItem key={item.product.id} item={item} />;
        })}
      </div>

      <div className="bg-[#f5f5f5] px-5 my-6 rounded-md flex flex-col justify-around">
        <h2 className="text-xl font-bold  py-5">Order Summary</h2>
        <Input type="text" placeholder="Enter Promo Code" />
        <BillingInformation cartItems={cartItems} />
        <Button onClick={handleOrder} variant="destructive" className="w-full">
          Checkout
        </Button>
      </div>
    </div>
  );
}
