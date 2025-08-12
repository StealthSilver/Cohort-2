import axios from "axios";
import { useEffect } from "react";

interface BlogPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`

  );
  const data : any = response.data;

  return (
    <div>
      Blog page {blogId}
      <br />
      title - {data.title}
      body - {data.body}
    </div>
  );
}
