"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createShortLink } from "./services/actions";

export default function ShortLinkBuilderPage() {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [target, setTarget] = useState("");

  const handleCreate = async () => {
    try {
      const createdLink = await createShortLink(slug, target);
      console.log("Created link:", createdLink);
      router.push(`/`);
    } catch (error) {
      console.error("Error creating link:", error);
    }
  };

  return (
    <div>
      <div>ShortLinkBuilderPage</div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span>slug</span>
          <input
            placeholder="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <span>target</span>
          <input
            placeholder="target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}