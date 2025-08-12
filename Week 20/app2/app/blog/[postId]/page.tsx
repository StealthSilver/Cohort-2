interface BlogPageProps {
    params: {
      blogId: string;
    };
  }
  
  export default function BlogPage({ params }: BlogPageProps) {
    const postId = params.blogId;
  
    return (
      <div>
        Blog page {postId}
      </div>
    );
  }
  