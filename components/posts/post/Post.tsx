"use client";

// import Image from "next/image";
import type { Post } from "@/types";
import Link from "next/link";

export default function Post({ title = "", body = "", reactions, id }: Post) {
  return (
    <div className="shadow-sm card bg-base-100 w-96">
      <Link href={`/posts/${id}`}>
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
      </Link>
      <hr />
    </div>
  );
}
