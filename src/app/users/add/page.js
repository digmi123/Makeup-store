import { revalidatePath } from "next/cache";
import prisma from "@/app/lib/prisma";

async function serverAction(formData) {
  "use server";
  const newUser = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    description: formData.get("description"),
  };
  const result = await prisma.user.create({ data: newUser });
  revalidatePath("/users");
}

export default function add() {
  return (
    <form action={serverAction}>
      <label>name</label>
      <input name="name" />

      <label>email</label>
      <input name="email" />

      <label>password</label>
      <input name="password" />

      <label>description</label>
      <input name="description" />

      <button type="submit">send</button>
    </form>
  );
}
