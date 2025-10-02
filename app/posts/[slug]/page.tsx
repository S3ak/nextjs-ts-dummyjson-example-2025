export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${slug}`);
  const { title, body, reactions } = await response.json();

  return (
    <div className="shadow-sm card bg-base-100 w-96">
      <figure>
        <img src="https://picsum.photos/200" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">
            Like {reactions.likes ?? 0}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
