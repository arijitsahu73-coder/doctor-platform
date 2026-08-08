import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-700 text-ink">
        Page not found
      </h1>
      <p className="text-muted mt-3">
        The page you're looking for doesn't exist yet.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 rounded-full bg-primary text-white text-sm font-medium px-5 py-2.5"
      >
        Go home
      </Link>
    </main>
  );
}
