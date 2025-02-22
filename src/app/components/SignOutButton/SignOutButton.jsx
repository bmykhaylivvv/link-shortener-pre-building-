"use client";

import { signOut } from "@/utils/supabase/actions";

export default function SignOutButton() {
  return (
    <button
      className="text-caption-1  w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-5  rounded-md"
      onClick={signOut}
    >
      Sign out
    </button>
  );
}
