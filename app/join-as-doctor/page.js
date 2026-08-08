import Link from "next/link";

export default function JoinAsDoctor() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-center">
      <Link href="/" className="text-sm text-muted hover:text-ink">
        ← Back to home
      </Link>
      <h1 className="font-display text-3xl font-700 text-ink mt-6">
        Doctor sign-up is coming next
      </h1>
      <p className="text-muted mt-3">
        This is where doctors will create a profile and upload qualifications
        for verification. We'll build the sign-up form and verification
        upload in the next step.
      </p>
    </main>
  );
}
