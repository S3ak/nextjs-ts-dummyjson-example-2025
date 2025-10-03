import { createPost } from "@/lib/posts/actions";

export default function NewPostPage() {
  const isSubmitting = false;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>

      <form className="space-y-6" action={createPost}>
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            minLength={5}
            maxLength={100}
            defaultValue="Sample Post Title for Testing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter post title (5-100 characters)"
          />
          <small className="text-gray-500">
            Minimum 5 characters, maximum 100 characters
          </small>
        </div>

        {/* Body Field */}
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content *
          </label>
          <textarea
            id="body"
            name="body"
            required
            minLength={20}
            maxLength={2000}
            rows={8}
            defaultValue="This is a sample post content for testing purposes. It contains enough characters to meet the minimum requirement and provides a good example of what a typical post might look like. You can modify this content or replace it entirely with your own text."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder="Write your post content here (20-2000 characters)"
          />
          <small className="text-gray-500">
            Minimum 20 characters, maximum 2000 characters
          </small>
        </div>

        {/* User ID Field */}
        <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            User ID *
          </label>
          <input
            type="number"
            id="userId"
            name="userId"
            required
            min={1}
            max={999999}
            defaultValue={1}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter user ID"
          />
          <small className="text-gray-500">Must be a positive number</small>
        </div>

        {/* Tags Field */}
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            pattern="^[a-zA-Z0-9\s,]+$"
            defaultValue="web development, react, nextjs, typescript"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter tags separated by commas (e.g., technology, web, react)"
          />
          <small className="text-gray-500">
            Separate multiple tags with commas. Only letters, numbers, and
            spaces allowed.
          </small>
        </div>

        {/* Image URL Field */}
        <div>
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="img"
            name="img"
            defaultValue="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
          <small className="text-gray-500">
            Enter a valid URL for the post image (optional)
          </small>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Creating Post..." : "Create Post"}
          </button>
        </div>

        {/* Form Info */}
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Form Information:</h3>
          <ul className="space-y-1">
            <li>• Fields marked with * are required</li>
            <li>• ID, views, and reactions will be auto-generated</li>
            <li>• All HTML5 validation is enabled</li>
            <li>• Form data will be logged to console for demo purposes</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
