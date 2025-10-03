"use client";

import Link from "next/link";
// import Image from "next/image";

interface PostI {
  likes: number;
  title: string;
  body: string;
  id: number;
  imgUrl: string;
}

export default function PostUI({
  title = "",
  body = "",
  likes = 0,
  id,
  imgUrl = "",
}: PostI) {
  return (
    <div className="shadow-sm card bg-base-100 w-96">
      <Link href={`/posts/${id}`}>
        <article className="overflow-hidden transition rounded-lg shadow-sm hover:shadow-lg">
          <figure>
            <img
              alt="Post image"
              src={imgUrl}
              className="object-cover w-full h-56"
            />
          </figure>

          <div className="p-4 bg-white sm:p-6">
            <p className="block text-xs text-gray-500">❤️ {likes}</p>

            <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

            <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
              {body}
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}
