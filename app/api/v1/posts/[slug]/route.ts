import { PostResponse } from "@/lib/types";
import { faker } from "@faker-js/faker";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/v1/posts/[slug]">
) {
  const { slug } = await ctx.params;

  const response = await fetch(`https://dummyjson.com/posts/${slug}`);
  const data: PostResponse = await response.json();

  if (!response.ok) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  return Response.json({
    ...data,
    img: `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 10000
    )}`,
    author: {
      handle: faker.person.firstName(),
    },
  });
}
