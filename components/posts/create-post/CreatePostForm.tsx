"use client";

import { useActionState } from "react";
import { createPost } from "@/lib/posts/actions";

const initialState = {
  title: "Sample Post Title for Testing",
  body: "This is a sample post content for testing purposes. It contains enough characters to meet the minimum requirement and provides a good example of what a typical post might look like. You can modify this content or replace it entirely with your own text.",
  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  tags: "web development, react, nextjs, typescript",
};

export default function CreatePostForm() {
  const [state, formAction, pending] = useActionState(createPost, initialState);
  console.log("state", state);
  return (
    <form className="space-y-6" action={formAction}>
      <p aria-live="polite">{state?.message}</p>
      <strong>Is form submitting: {pending ? "true" : "false"}</strong>
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
          defaultValue={initialState.title}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter post title (5-100 characters)"
        />
        <small className="text-gray-500">
          Minimum 5 characters, maximum 100 characters
        </small>
        <small className="text-red-700">{state?.errors?.title}</small>
      </div>

      {/* Body Field */}
      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Content *
        </label>
        <small className="text-red-700">{state?.errors?.body}</small>
        <textarea
          id="body"
          name="body"
          required
          minLength={20}
          maxLength={2000}
          rows={8}
          defaultValue={initialState.body}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          placeholder="Write your post content here (20-2000 characters)"
        />
        <small className="text-gray-500">
          Minimum 20 characters, maximum 2000 characters
        </small>
      </div>

      {/* Tags Field */}
      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tags
        </label>
        <small className="text-red-700">{state?.errors?.tags}</small>
        <input
          type="text"
          id="tags"
          name="tags"
          pattern="^[a-zA-Z0-9\s,]+$"
          defaultValue={initialState.tags}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter tags separated by commas (e.g., technology, web, react)"
        />
        <small className="text-gray-500">
          Separate multiple tags with commas. Only letters, numbers, and spaces
          allowed.
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
        <small className="text-red-700">{state?.errors?.img}</small>
        <input
          type="url"
          id="img"
          name="img"
          defaultValue={initialState.img}
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
          disabled={pending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {pending ? "Creating Post..." : "Create Post"}
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
  );
}
