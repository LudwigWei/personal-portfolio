import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, ArrowLeft } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Louis Vincent Crisaldo" },
      { name: "description", content: "A complete list of projects by Louis Vincent Crisaldo." },
      { property: "og:title", content: "All Projects — Louis Vincent Crisaldo" },
      { property: "og:description", content: "A complete list of projects by Louis Vincent Crisaldo." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-neutral-900 font-sans">
      <header className="sticky top-0 z-50 bg-[var(--color-background)]/90 backdrop-blur border-b border-neutral-300">
        <nav className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
          <Link to="/" className="font-bold text-4xl tracking-tight">Portfolio.</Link>
          <Link to="/#projects" className="inline-flex items-center gap-1.5 text-base hover:text-neutral-600">
            <ArrowLeft className="w-4 h-4" /> Return
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Projects</h1>
        <p className="mt-3 text-lg md:text-xl text-neutral-600">Every project I've worked on, in one place.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white rounded-xl p-6 shadow-sm flex flex-col min-h-[580px]">
              <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden relative">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                    className="absolute top-3 right-3 bg-gray-700 p-2 rounded shadow-sm hover:bg-gray-800 z-10 transform transition-transform duration-200 hover:scale-110"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                ) : null}
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-bold text-2xl">{p.title}</h3>
              </div>

              <p className="mt-2 text-md text-neutral-600 flex-1 text-justify">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-100 border border-neutral-200 rounded-md px-2 py-0.5 transform transition-all duration-150 hover:bg-neutral-200 hover:scale-105 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
