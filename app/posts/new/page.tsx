import CreatePostForm from "@/components/posts/create-post/CreatePostForm";

export default function NewPostPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>

      <CreatePostForm />
    </div>
  );
}
