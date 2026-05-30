import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  User,
  MapPin,
  Phone,
  Download,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  GraduationCap,
  Briefcase,
  Cpu,
  FileSpreadsheet,
  Code2,
  BarChart3,
  Figma,
  Database,
  ArrowRight,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.png";
import { projects as allProjects } from "@/lib/portfolio-data";
import { ContactModal } from "@/components/ContactModal";
import { ImageModal } from "@/components/ImageModal";
import DomeGallery from "@/components/DomeGallery";

export const Route = createFileRoute("/")({
  component: Index,
});

type NavItem = {
  label: string;
  icon: typeof Home | null;
  href?: string;
  to?: string;
  action?: "contact";
};

const navItems: NavItem[] = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Projects", icon: Briefcase, href: "#projects" },
  { label: "Contact", icon: Phone, href: "#contact" },
];

const techStack = [
  { name: "MS Excel", icon: FileSpreadsheet },
  { name: "Python", icon: Code2 },
  { name: "PowerBI", icon: BarChart3 },
  { name: "Figma", icon: Figma },
  { name: "SQL", icon: Database },
  { name: "GitHub", icon: Github },
];

const projects = allProjects.slice(0, 3);

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | undefined>(undefined);
  const [lightboxAlt, setLightboxAlt] = useState<string | undefined>(undefined);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView();
    }

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });
  }, []);


  return (
    <div className="min-h-screen bg-[var(--color-background)] text-neutral-900 font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[var(--color-background)]/90 backdrop-blur border-b border-neutral-300">
        <nav className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
          <a href="#home" className="font-bold text-4xl tracking-tight">Portfolio.</a>
          <ul className="hidden md:flex items-center gap-12 text-base">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.action === "contact" ? (
                  <button onClick={() => setContactOpen(true)} className="flex items-center gap-1.5 hover:text-neutral-600 transition-colors">
                    {item.label}
                  </button>
                ) : item.to ? (
                  <Link to={item.to} className="flex items-center gap-1.5 hover:text-neutral-600 transition-colors">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href ?? "#"} className="flex items-center gap-1.5 hover:text-neutral-600 transition-colors">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
        {menuOpen && (
          <ul className="md:hidden border-t border-neutral-300 px-6 py-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.action === "contact" ? (
                  <button onClick={() => { setMenuOpen(false); setContactOpen(true); }} className="block py-1 text-left w-full">{item.label}</button>
                ) : item.to ? (
                  <Link to={item.to} onClick={() => setMenuOpen(false)} className="block py-1">{item.label}</Link>
                ) : (
                  <a href={item.href ?? "#"} onClick={() => setMenuOpen(false)} className="block py-1">{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section id="home" data-reveal className="min-h-[calc(100vh-4.5rem)] py-0 grid md:grid-cols-2 gap-12 items-center snap-start reveal">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm Louis Vincent Crisaldo
            </h1>
            <p className="mt-5 text-2xl md:text-3xl text-neutral-700 font-['Headland_One']">Aspiring Data Analyst</p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-neutral-600 max-w-xl">
              I have a deep curiosity for how data shapes our world. Echoing <strong>Clive Humby</strong>'s sentiment that <em>"data is the new oil,"</em> I firmly believe in the power of refined information and aspire to become a Data Analyst capable of transforming complex, messy datasets into clear, actionable insights that drive real-world impact.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6 text-base text-neutral-700">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Batangas, Philippines</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Available Now
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-6 py-3 text-base font-medium hover:bg-neutral-800 transition">
                <Phone className="w-5 h-5" /> Contact Now
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-white border border-neutral-300 rounded-full px-6 py-3 text-base font-medium hover:bg-neutral-50 transition">
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
              <hr className="mt-8 mb-4 border-neutral-300" />
            <div className="flex items-center gap-4 text-base">
              <span className="font-semibold">Follow me:</span>
              <a href="https://github.com/LudwigWei" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded hover:bg-neutral-200"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/louis-vincent-crisaldo-43aa403a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded hover:bg-neutral-200"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/crisaldolv_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded hover:bg-neutral-200"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/crisaldolv" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded hover:bg-neutral-200"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end -mt-4">
            <img
              src={profileImg}
              alt="Louis Vincent Crisaldo"
              width={1024}
              height={1024}
              className="w-80 sm:w-[26rem] md:w-full max-w-xl h-auto object-contain rounded-lg md:translate-x-12 md:translate-y-6"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" data-reveal className="min-h-[calc(100vh-4.5rem)] py-10 md:py-14 snap-start flex flex-col justify-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="mt-3 text-lg md:text-xl text-neutral-600 max-w-xl">
            A snapshot of my academic journey, experience, and the tools I use to analyze data.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Education */}
              <div className="bg-white rounded-xl p-7 shadow-sm min-h-[200px]">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <GraduationCap className="w-5 h-5" /> EDUCATION
                </div>
                <div className="mt-5 pl-4 border-l-2 border-neutral-300 relative">
                  <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-neutral-800 border-2 border-white" />
                  <h3 className="font-bold text-base md:text-lg">BS COMPUTER SCIENCE</h3>
                  <p className="text-base italic text-neutral-700 mt-1">Batangas State University - TNEU, Alangilan Campus</p>
                  <p className="text-sm text-neutral-500 mt-1">2022 · Present</p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl p-7 shadow-sm min-h-[220px]">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <Briefcase className="w-5 h-5" /> EXPERIENCE
                </div>
                <div className="mt-5 pl-4 border-l-2 border-neutral-300 relative">
                  <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-neutral-800 border-2 border-white" />
                  <h3 className="font-bold text-base md:text-lg">QA ENGINEER INTERN</h3>
                  <p className="text-base italic text-neutral-700 mt-1">Center for AI and Smart Technologies (CAIST)</p>
                  <p className="text-base italic text-neutral-700">Batangas State University - TNEU, Pablo Borbon Campus</p>
                  <p className="text-sm text-neutral-500 mt-1">June 2025 · July 2025</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-xl p-7 shadow-sm flex flex-col justify-center min-h-[200px]">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <Cpu className="w-5 h-5" /> TECH STACK
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <FileSpreadsheet className="w-4 h-4" /> MS Excel
                  </span>

                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <Code2 className="w-4 h-4" /> Python
                  </span>

                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <BarChart3 className="w-4 h-4" /> PowerBI
                  </span>

                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <Figma className="w-4 h-4" /> Figma
                  </span>

                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <Database className="w-4 h-4" /> SQL
                  </span>

                  <span className="inline-flex items-center justify-center gap-2 bg-neutral-200/70 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 w-36">
                    <Github className="w-4 h-4" /> GitHub
                  </span>
                </div>
              </div>
            </div>

            {/* Life outside work */}
            <div className="bg-white rounded-xl p-7 shadow-sm flex flex-col min-h-[420px]">
              <div className="font-semibold text-base">LIFE OUTSIDE WORK</div>
              <div className="mt-4 flex-1 rounded-lg overflow-hidden bg-neutral-900 min-h-[300px] relative">
                <DomeGallery
                  fit={0.8}
                  minRadius={400}
                  maxVerticalRotationDeg={0}
                  segments={34}
                  dragDampening={2}
                  grayscale
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-reveal className="min-h-[calc(100vh-4.5rem)] py-10 md:py-14 snap-start flex flex-col justify-center reveal">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
              <p className="mt-3 text-lg md:text-xl text-neutral-600">A few highlights from recent analytical workflows.</p>
            </div>
            <Link to="/projects" className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col min-h-[580px] border border-transparent hover:border-neutral-300 hover:shadow-md transform transition-all duration-200 hover:scale-105"
              >
                <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden relative">
                  {p.image ? (
                    <>
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      <button
                        onClick={() => {
                          setLightboxSrc(p.image);
                          setLightboxAlt(p.title);
                          setLightboxOpen(true);
                        }}
                        aria-label={`Open ${p.title} image`}
                        className="absolute inset-0 w-full h-full bg-transparent"
                      />
                    </>
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

                {p.tool ? (
                  <div className="mt-4 flex gap-3">
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 basis-1/2 items-center justify-center gap-2 border border-neutral-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition"
                      >
                        View on GitHub <Github className="w-4 h-4" />
                      </a>
                    ) : null}
                    <a
                      href={p.tool}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 basis-1/2 items-center justify-center gap-2 bg-neutral-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition"
                    >
                      View Tool <LayoutDashboard className="w-4 h-4" />
                    </a>
                  </div>
                ) : p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2 text-sm font-medium hover:bg-neutral-50 transition"
                  >
                    View on GitHub <Github className="w-4 h-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" data-reveal className="min-h-[calc(100vh-4.5rem-4rem)] py-16 md:py-24 grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center snap-start reveal">
          <h2 className="text-[7.5rem] sm:text-[7.5rem] md:text-[7.5rem] font-bold tracking-tight leading-[1.05]">
            Let's uncover<br />the insights.
          </h2>
          <div className="hidden md:block w-px bg-neutral-300 h-150 self-center" aria-hidden="true" />
          <div className="flex flex-col items-end">
              <p className="text-2xl leading-relaxed text-neutral-700 text-right">
              Dedicated to transforming raw, complex data into actionable, decision-ready insights that fuel strategic growth and innovation. I am actively looking for opportunities where I can contribute to business success while continuously learning, expanding my technical skill set, and advancing toward sophisticated data methodologies.
            </p>
            <button onClick={() => setContactOpen(true)} className="mt-6 inline-flex items-center justify-center gap-2 bg-back border border-neutral-300 rounded-full px-8 py-3.5 text-md font-medium hover:bg-neutral-50 transition w-40">
              Connect
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-md text-neutral-600">
          <span>© 2026  LOUIS VINCENT CRISALDO</span>
          <div className="flex items-center gap-5">
            <a href="https://github.com/LudwigWei" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 rounded hover:bg-neutral-200"><Github className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/crisaldolv" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 rounded hover:bg-neutral-200"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/crisaldolv_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 rounded hover:bg-neutral-200"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/louis-vincent-crisaldo-43aa403a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 rounded hover:bg-neutral-200"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <ImageModal open={lightboxOpen} src={lightboxSrc} alt={lightboxAlt} onClose={() => setLightboxOpen(false)} />
    </div>
  );
}
