import { Fragment } from "react";

export default function BillingInformation({ cartItems }) {
  const tax = 10;
  const shipping = 15;

  const total = cartItems.reduce(
    (currentTotal, item) => currentTotal + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="grid grid-cols-[repeat(4,minmax(100px,1fr))] py-5 gap-y-4">
        {cartItems.map((item) => {
          return (
            <Fragment key={item.product.id}>
              <h3 className="font-medium">{item.product.name}</h3>
              <p>{item.product.price}$</p>
              <p>{item.quantity}</p>
              <p>{item.product.price * item.quantity}$</p>
            </Fragment>
          );
        })}
      </div>
      <p className="py-2">
        SubTotal: <span className="font-bold">{total}$</span>
      </p>
      <p className="py-2">
        Tax: <span className="font-bold">{tax}$</span>
      </p>
      <p className="py-2">
        Shipping: <span className="font-bold">{shipping}$</span>
      </p>

      <p className="py-2">
        Estimated Total:{" "}
        <span className="font-bold">{total + tax + shipping}$</span>
      </p>
    </div>
  );
}
