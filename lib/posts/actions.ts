"use server";

import { initialCreatePostFormStateI } from "@/components/posts/create-post/CreatePostForm";
import { z } from "zod";

const createPostSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Too Short" })
    .max(30, { message: "Too long" }),
  body: z
    .string()
    .min(2, { message: "Too Short" })
    .max(30, { message: "Too long" }),
  img: z.url(),
  tags: z.array(z.string()),
});

export async function createPost(
  _initialState: initialCreatePostFormStateI,
  formData: FormData
) {
  console.warn("formData", formData);
  const tags =
    formData
      .get("tags")
      ?.toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0) || [];

  const validatedFields = createPostSchema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
    userId: 1,
    tags: tags,
    img: formData.get("img"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("Post data:", validatedFields);
}
