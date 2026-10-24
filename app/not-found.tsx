import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="eyebrow text-teal-dark">404</p>
      <h1 className="mt-4 text-5xl font-medium">This page doesn&apos;t exist.</h1>
      <Link href="/" className="btn btn-dark mt-10">
        Back to home
      </Link>
    </section>
  );
}
