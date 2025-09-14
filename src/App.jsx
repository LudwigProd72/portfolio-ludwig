import { useEffect, useState, useMemo } from "react"

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [theme])
  return { theme, setTheme }
}

const projects = [
  {
    title: "Softelle",
    role: "Branding/Packaging",
    year: "2025",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Ethics Clothing",
    role: "UI/UX/DataViz",
    year: "2025",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "ST Herbretaise",
    role: "Direction artistique",
    year: "2024–2025",
    image: "https://images.unsplash.com/photo-1520975930846-c1dcb4000f84?w=1600&q=80&auto=format&fit=crop",
    link: "#",
  },
]

export default function App() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const bg = isDark ? "bg-black" : "bg-white"
  const fg = isDark ? "text-white" : "text-black"
  const sub = isDark ? "text-neutral-400" : "text-neutral-600"
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className={`${bg} ${fg} min-h-screen font-mono tracking-tight`}>
      <header className="sticky top-0 z-50 border-b-4 border-black dark:border-white bg-[--bgHeader]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-xl sm:text-2xl font-extrabold uppercase">LUDWIG JR</a>
          <nav className="hidden md:flex gap-6">
            <a href="#work" className="uppercase border-2 border-black dark:border-white px-3 py-1 active:translate-y-0.5">Projets</a>
            <a href="#about" className="uppercase border-2 border-black dark:border-white px-3 py-1 active:translate-y-0.5">À propos</a>
            <a href="#contact" className="uppercase border-2 border-black dark:border-white px-3 py-1 active:translate-y-0.5">Contact</a>
          </nav>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="uppercase border-4 border-black dark:border-white px-3 py-1 active:translate-y-0.5"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main id="home" className="max-w-6xl mx-auto px-4">
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 border-4 border-black dark:border-white p-6 sm:p-8">
              <h1 className="text-4xl sm:text-6xl leading-[0.95] font-extrabold uppercase">
                Portfolio brutaliste pour interfaces utiles et percutantes
              </h1>
              <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${sub}`}>
                DA, UI/UX, data-viz. Design fort, lisible, rapide à produire et à déployer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="border-4 border-black dark:border-white px-5 py-3 uppercase active:translate-y-0.5">Voir projets</a>
                <a href="#contact" className="border-4 border-black dark:border-white px-5 py-3 uppercase active:translate-y-0.5">Me contacter</a>
              </div>
            </div>
            <div className="lg:col-span-5 border-4 border-black dark:border-white p-3">
              <div className="aspect-[4/3] border-4 border-black dark:border-white">
                <img
                  src="https://images.unsplash.com/photo-1527269534026-c86f4009b050?w=1600&q=80&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="uppercase">Disponible alternance 2025–2026</span>
                <span className="uppercase">Laval • FR</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-10 border-t-4 border-b-4 border-black dark:border-white">
          <div className="py-6 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">Projets</h2>
            <a href="#contact" className="uppercase underline">Demander le PDF</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={p.link} className="group">
                <div className="border-4 border-black dark:border-white">
                  <div className="aspect-[4/3]">
                    <img src={p.image} alt="" className="w-full h-full object-cover group-active:translate-y-0.5" />
                  </div>
                  <div className="p-4 border-t-4 border-black dark:border-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-extrabold uppercase">{p.title}</h3>
                      <span className="text-xs uppercase">{p.year}</span>
                    </div>
                    <p className={`mt-1 text-sm uppercase ${sub}`}>{p.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 border-4 border-black dark:border-white p-6">
              <h3 className="text-xl font-extrabold uppercase">À propos</h3>
              <p className={`mt-3 ${sub}`}>
                Étudiant en BUT MMI. Direction artistique, systèmes visuels, composants UI rapides et cohérents.
                Je conçois des interfaces brutes, contrastées, accessibles et efficaces.
              </p>
            </div>
            <div className="border-4 border-black dark:border-white p-6">
              <h4 className="font-extrabold uppercase">Stack</h4>
              <ul className={`mt-3 space-y-1 text-sm uppercase ${sub}`}>
                <li>React + Vite</li>
                <li>Tailwind v4</li>
                <li>Affinity Suite</li>
                <li>DaVinci Resolve</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border-4 border-black dark:border-white p-6">
              <h3 className="text-xl font-extrabold uppercase">Contact</h3>
              <p className={`mt-3 ${sub}`}>Disponible pour alternance et missions freelance.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:contact@example.com" className="border-4 border-black dark:border-white px-4 py-2 uppercase active:translate-y-0.5">Email</a>
                <a href="#" className="border-4 border-black dark:border-white px-4 py-2 uppercase active:translate-y-0.5">LinkedIn</a>
                <a href="#" className="border-4 border-black dark:border-white px-4 py-2 uppercase active:translate-y-0.5">GitHub</a>
              </div>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="border-4 border-black dark:border-white p-6 space-y-3">
              <input className="w-full border-4 border-black dark:border-white px-4 py-3 bg-transparent" placeholder="Nom" />
              <input type="email" className="w-full border-4 border-black dark:border-white px-4 py-3 bg-transparent" placeholder="Email" />
              <textarea rows={4} className="w-full border-4 border-black dark:border-white px-4 py-3 bg-transparent" placeholder="Message" />
              <button className="w-full border-4 border-black dark:border-white px-5 py-3 uppercase active:translate-y-0.5">Envoyer</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={sub}>© {year} Ludwig. Brutal UI.</p>
          <div className="flex gap-4 text-sm uppercase">
            <a href="#" className="underline">Mentions</a>
            <button onClick={() => setTheme(isDark ? "light" : "dark")} className="underline">Toggle</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
