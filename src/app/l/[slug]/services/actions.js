"use server";

import { createClient } from "@/utils/supabase/server";

export async function getShortLinkTargetBySlug(slug) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("short_link")
    .select("id, target")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Failed to get short links:", error);

    throw new Error("Failed to get short links");
  }

  if (!data) return null;

  return data.target;
}

