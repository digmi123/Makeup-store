import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/app/lib/prisma";

export async function POST(req) {
  const { product, quantity, color } = await req.json();
  console.log({ product, quantity, color });
  const session = await getServerSession(options);
  await prisma.OrderItem.create({
    data: {
      userId: session.user.id,
      productId: product.id,
      quantity,
      colorId: color.id,
    },
  });
  return Response.json({ message: "Created successfully" });
}

export async function GET() {
  const session = await getServerSession(options);

  const cartItems = await prisma.OrderItem.findMany({
    where: { userId: session.user.id },
    include: {
      color: true,
      product: { include: { productColors: { include: { color: true } } } },
    },
  });
  return Response.json(cartItems);
}
