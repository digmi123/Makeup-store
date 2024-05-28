const shippingOptions = [
  {
    title: "Pickup",
    description: "Ready within 2 hours",
    information:
      "Pickup at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
  {
    title: "Delivery",
    description: "as soon as possible",
    information:
      "Delivery at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
  {
    title: "Shipping",
    description: "Get it in 7 days to your address",
    information:
      "Shipping at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
];

export default function ShippingOptions() {
  return (
    <div>
      <h2 className="text-2xl font-bold pb-4">Delivery options</h2>

      <div className="grid grid-cols-[repeat(auto-fill, minmax(10rem, 1fr))] items-start gap-4">
        {shippingOptions.map((option) => {
          return (
            <div
              className="border-2 border-gray-600 rounded-xl px-4 py-2 flex flex-col items-start justify-between cursor-pointer"
              key={option.title}
            >
              <h3>{option.title}</h3>
              <p className="text-lg">{option.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
