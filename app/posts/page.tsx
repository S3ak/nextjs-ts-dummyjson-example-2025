import type { PostResponse } from "@/types";
import PostUI from "@/components/posts/post/Post";

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: PostResponse = await response.json();

  if (!response.ok) {
    return "There was an error.";
  }

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      Posts
      <section>
        {posts.map(({ title, id, reactions }) => (
          <PostUI key={id} title={title} reactions={reactions} id={id} />
        ))}
      </section>
    </div>
  );
}
