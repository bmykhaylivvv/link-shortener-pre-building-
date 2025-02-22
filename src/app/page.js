import Link from "next/link";
import SignOutButton from "./components/SignOutButton/SignOutButton";
import { getUserShortLinks } from "./services/actions";
import { headers } from "next/headers";

export default async function Home() {
  const userShortLinks = await getUserShortLinks();
  const host = headers().get("host");

  return (
    <div>
      <div>User Short links</div>
      <div>
        {userShortLinks.map((shortLink) => (
          <div key={shortLink.id} className="flex gap-1">
            <span>{shortLink.id}</span>
            <span>{`${host}/l/${shortLink.slug}`}</span>
            <span>{shortLink.target}</span>
          </div>
        ))}
      </div>
      <Link href="/short-link-builder">Short Link Builder</Link>
      <SignOutButton />
    </div>
  );
}