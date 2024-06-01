import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/lib/prisma";

export async function POST(req) {
  const { cartItems } = await req.json();
  const orderItemsIds = cartItems.map((cartItem) => {
    return { orderItemId: cartItem.orderItemId };
  });

  const session = await getServerSession(options);
  const createdOrder = await prisma.Order.create({
    data: {
      userId: session.user.id,
      shopId: 1,
      paymentMethod: "Visa",
      orderItems: {
        connect: orderItemsIds,
      },
    },
  });

  return Response.json(createdOrder);
}
