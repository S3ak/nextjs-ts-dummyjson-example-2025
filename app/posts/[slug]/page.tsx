import ErrorUI from "@/components/error";
import PostUI from "@/components/posts/post/Post";
import { API_URL } from "@/lib/constants";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(`${API_URL}/posts/${slug}`);

  if (!response.ok) {
    return <ErrorUI body="fetching posts did not work" />;
  }

  const { title, body, reactions, id, img } = await response.json();

  return (
    <PostUI
      title={title}
      body={body}
      id={id}
      likes={reactions.like}
      imgUrl={img}
    />
  );
}
