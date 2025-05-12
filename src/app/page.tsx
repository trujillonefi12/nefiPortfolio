'use client'
import { useEffect, useState } from 'react'
import Link
  from 'next/link'
import TechGrid from './components/Techgrid'

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return width
}

export default function Home() {
  const width = useWindowWidth()



  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative overflow-hidden text-white">
      {/* ✅ Grid Background using SVG */}
      <div className="absolute inset-0 bg-[url('/dominos.svg')] bg-repeat opacity-30 z-0" />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8 pt-6 md:pt-10">
            <Link href="/" passHref>
              <div
                className="text-2xl font-bold bg-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md 
      transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:text-white cursor-pointer"
                title="Go to Home"
              >
                N
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {/* Theme toggle or other icons */}
            </div>
          </header>

          {/* Hero */}
          <section className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Nefi <span className="text-blue-400">Trujillo</span>,<br />
                full-stack developer
              </h1>
              <p className="text-gray-300 mt-4">
                I build modern apps using <span className="text-blue-400">React</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Tailwind CSS</span>.
              </p>
            </div>
            <img src="/nefimemoji.png"
              alt="Avatar"
              className={`rounded-full shadow-lg ${width > 768 ? 'w-60 h-60' : 'w-24 h-24'
                }`} />
          </section>

          {/* Pages section */}
          <section className="mb-12">
            <h2 className="text-lg uppercase text-gray-400 mb-4">Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card title="Blog" subtitle="Read what I share with the world" href="/blog" />
              <Card title="Portfolio" subtitle="Projects, experience & more" href="/portfolio" />
              <Card title="Spotify Playlist" subtitle="My work fuel" href="https://spotify.com" external />
              <Card title="Let's Talk" subtitle="Open to opportunities!" href="/contact" />
            </div>
          </section>

          {/* Technologies section */}

          <section>
            <h2 className="text-lg uppercase text-gray-400 mb-4">Technologies</h2>
            <TechGrid
              title="Frontend"
              items={[
                { name: 'TypeScript', logo: '/logos/typescript.svg', bg: '#007acc' },
                { name: 'React', logo: '/logos/react.svg', bg: '#61dafb' },
                { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', bg: '#38bdf8' },
                { name: 'Next.js', logo: '/logos/nextdotjs.svg', bg: '#e8dee6' },
                { name: 'Bootstrap', logo: '/logos/bootstrap.svg', bg: '#7952B3' },
                { name: 'HTML5', logo: '/logos/html5.svg', bg: '#e34c26' },
                { name: 'CSS3', logo: '/logos/css3.svg', bg: '#264de4' },
                { name: 'JavaScript', logo: '/logos/javascript.svg', bg: '#f7df1e' },
              ]}
            />

            <TechGrid
              title="Backend"
              items={[
                { name: 'JavaScript', logo: '/logos/javascript.svg', bg: '#f7df1e' },
                { name: 'Vite', logo: '/logos/vite.svg', bg: '#646cff' },
                { name: 'Java', logo: '/logos/java.svg', bg: '#a3bcaf' },
                { name: 'Drizzle ORM', logo: '/logos/drizzle.svg', bg: '#C5F74F' },
              ]}
            />

            <TechGrid
              title="Tools"
              items={[
                { name: 'VS Code', logo: '/logos/vscode.svg', bg: '#007acc' },
                { name: 'GitHub', logo: '/logos/git.svg', bg: '#e8e8e6' },
              ]}
            />

          </section>


        </div>
      </div>
    </main>
  )
}

function Card({
  title,
  subtitle,
  href,
  external = false,
}: {
  title: string
  subtitle: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
    >
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <h3 className="font-semibold text-white">{title}</h3>
    </a>
  )
}
