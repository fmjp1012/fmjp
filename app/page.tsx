import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Fuma Ito (fmjp, 伊藤楓馬)</h1>
        <p className="mb-4">
          I&apos;m a Software Engineer.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/fmjp1012"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/fmjp1012"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/fmjp1012"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atcoder
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2 text-blue-400">Coming Soon</h3>
            <p>Description of Project 2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
