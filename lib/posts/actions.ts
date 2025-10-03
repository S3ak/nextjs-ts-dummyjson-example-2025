"use server";

export async function createPost(formData: FormData) {
  "use server";

  const rawFormData = {
    customerId: formData.get("title"),
    amount: formData.get("body"),
    status: formData.get("img"),
  };

  console.info("rawFormData", rawFormData);
}
