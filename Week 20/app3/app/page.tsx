import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogoutButton from "../app/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {session ? (
        <>
          <h1 className="text-2xl font-bold">
            Welcome, {session.user?.name} 👋
          </h1>
          <LogoutButton />
        </>
      ) : (
        <a
          href="/signin"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Go to Sign In
        </a>
      )}
    </div>
  );
}
