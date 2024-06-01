import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tax = 10;
const shipping = 15;

export default async function orders() {
  //shopId needs to be dynamic to the current shopId were working with.
  const orders = await prisma.Order.findMany({
    where: { shopId: 1 },
    include: {
      orderItems: { include: { user: true, product: true } },
    },
  });

  const getQuantity = (items) => {
    return items.reduce((currQuantity, item) => {
      return currQuantity + item.quantity;
    }, 0);
  };

  const getTotalPrice = (items) => {
    console.log({ items });
    return items.reduce((currTotal, item) => {
      return currTotal + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <Table>
      <TableCaption>A list of your store orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Payment Method</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                {order.orderItems[0].user.name}
              </TableCell>
              <TableCell>{getQuantity(order.orderItems)}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>
                {getTotalPrice(order.orderItems) + tax + shipping}$
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
