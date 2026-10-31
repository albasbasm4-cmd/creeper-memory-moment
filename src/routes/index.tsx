import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شاشة البداية" },
      { name: "description", content: "شاشة البداية مع الكريبر والصورة والأغنية." },
      { property: "og:title", content: "شاشة البداية" },
      { property: "og:description", content: "شاشة البداية مع الكريبر والصورة والأغنية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/app.html"
      title="شاشة البداية"
      allow="autoplay"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
