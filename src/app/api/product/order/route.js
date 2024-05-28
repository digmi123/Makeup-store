import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/lib/prisma";

export async function POST(req) {
  // const { product, quantity, color } = await req.json();
  // console.log({ product, quantity, color });
  const session = await getServerSession(options);
  const createdOrder = await prisma.Order.create({
    data: {
      userId: session.user.id,
      shopId: 1,
      paymentMethod: "Visa",
    },
  });
  return Response.json(createdOrder);
}
