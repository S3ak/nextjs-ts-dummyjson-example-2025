import type { PostResponse } from "@/types";
import PostUI from "@/components/posts/post/Post";
import ErrorUI from "@/components/error";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Posts() {
  const response = await fetch("http://localhost:3000/api/v1/posts");
  const { posts }: PostResponse = await response.json();

  if (!response.ok) {
    return <ErrorUI body="fetching posts did not work" />;
  }

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      Posts
      <section>
        <Link href="/posts/new">
          <Button>Create New Post</Button>
        </Link>
      </section>
      <section className="flex flex-wrap gap-2">
        {posts.map(({ title, id, reactions, body, img }) => (
          <PostUI
            key={id}
            title={title}
            likes={reactions.likes}
            id={id}
            body={body}
            imgUrl={img}
          />
        ))}
      </section>
    </div>
  );
}
