import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>Page 1</div>
      <div>
        <Link className="text-cyan-500" href="/page2">
          Go to page 2
        </Link>
      </div>
    </main>
  );
}
