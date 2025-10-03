import { PostResponse } from "@/lib/types";

export async function GET(request: Request) {
  const response = await fetch("https://dummyjson.com/posts");
  const data: PostResponse = await response.json();

  if (!response.ok) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const formattedPosts = data.posts.map((post) => ({
    ...post,
    img: `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 10000
    )}`,
  }));

  return Response.json({
    ...data,
    posts: formattedPosts,
  });
}
