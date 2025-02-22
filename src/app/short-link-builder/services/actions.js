"use server";

import { createClient } from "@/utils/supabase/server";

export async function createShortLink(slug, target) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  const shortLinkObject = {
    user_id: user.id,
    slug,
    target,
  };
  const { data, error } = await supabase
    .from("short_link")
    .insert(shortLinkObject)
    .select();

  const createdShortLink = data[0];

  if (error) {
    console.error("Failed to create short link:", error);

    throw new Error("Failed to create short link");
  }

  return createdShortLink;
}
