import { useState } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tai<span className="text-sky-500">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="transition-colors hover:text-sky-500" href="#about">About</a>
            <a className="transition-colors hover:text-sky-500" href="#skills">Skills</a>
            <a className="transition-colors hover:text-sky-500" href="#contact">Contact</a>
          </div>
          <button
            type="button"
            onClick={() => setIsDark((dark) => !dark)}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle color theme"
          >
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>

        <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-500">Welcome to my space</p>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-8xl dark:text-white">
            Hello World<span className="text-sky-500">.</span>
          </h1>
          <div id="about" className="mt-8 max-w-2xl border-l-2 border-sky-400 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <p>Halo, saya Tai. Saya sedang belajar membangun pengalaman web yang sederhana, bermanfaat, dan menyenangkan untuk digunakan.</p>
          </div>
          <a href="#skills" className="mt-10 inline-flex rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600">
            Explore my skills
          </a>
        </section>

        <section id="skills" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-500">What I use</p>
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">My skills</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
                <div key={skill} className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{skill}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Building clean and responsive interfaces.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 lg:px-8">
          Let&apos;s build something useful together.
        </footer>
      </div>
    </main>
  )
}

export default App
