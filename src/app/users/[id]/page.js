export async function generateMetadata({ params }) {
  const userId = Number(params.id);
  const user = await getUserDetails(userId);
  return {
    title: user.name,
  };
}

async function getUserDetails(userId) {
  const allUsers = await prisma.user.findUnique({
    where: { id: userId },
  });
  return allUsers;
}

export default async function userDetails({ params }) {
  const userId = Number(params.id);
  const user = await getUserDetails(userId);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.description}</p>
    </div>
  );
}
