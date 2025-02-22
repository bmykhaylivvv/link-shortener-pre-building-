"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUserShortLinks() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("short_link")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error("Failed to get short links:", error);

    throw new Error("Failed to get short links");
  }

  return data;
}

