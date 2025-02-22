import { redirect } from "next/navigation";

import { getShortLinkTargetBySlug } from './services/actions'

const someRedirectingMap = {
  qwerty: "https://google.com",
};

export default async function LinkPage({ params }) {
  const { slug } = params;
  const redirectUrl = await getShortLinkTargetBySlug(slug);

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return <div>Not found</div>;
}