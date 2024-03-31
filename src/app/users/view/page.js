import Link from "next/link";
import prisma from "@/app/lib/prisma";

async function getUsers() {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

export default async function view() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user) => {
        return (
          <Link href={`/users/${encodeURIComponent(user.id)}`}>
            <h1>{user.email}</h1>
          </Link>
        );
      })}
    </div>
  );
}
