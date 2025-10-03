import { PostResponse } from "@/lib/types";
import { faker } from "@faker-js/faker";

export async function GET(request: Request) {
  const response = await fetch("https://dummyjson.com/posts");
  const data: PostResponse = await response.json();

  if (!response.ok) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const formattedPosts = data.posts.map((post) => ({
    ...post,
    img: faker.image.url(),
  }));

  return Response.json({
    ...data,
    posts: formattedPosts,
  });
}
