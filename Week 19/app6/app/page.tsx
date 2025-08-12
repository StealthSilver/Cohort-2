import Link from "next/link"

export default function Home() {
  return (
    <div className = "text-lg w-screen h-screen flex items-center justify-center">
    <div className="text-lg">
      TODO application
<br />
      <Link className="border p-2 m-4 text-sm" href = "/signin">Signin to the todo app</Link>
      <br />
      <Link className="border p-2 m-4 text-sm" href = "/signup">Signup to the todo app</Link>
    </div></div>
  );
}

