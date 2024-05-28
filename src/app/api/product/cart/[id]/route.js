import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/authOptions";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @returns
 */
export async function DELETE(req, { params }) {
  const session = await getServerSession(options);
  await prisma.UsersProducts.delete({
    where: {
      userId_productId: {
        userId: session.user.id,
        productId: Number(params.id),
      },
    },
  });
  return Response.json({ message: "Deleted succesfully" });
}
