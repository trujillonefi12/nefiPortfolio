'use client'

type CardProps = {
    title: string
    subtitle: string
    href: string
    external?: boolean
}

export default function Card({ title, subtitle, href, external = false }: CardProps) {
    return (
        <a
            href={href}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : undefined}
            className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
        >
            <p className="text-gray-400 text-sm">{subtitle}</p>
            <h3 className="font-semibold text-white">{title}</h3>
        </a>
    )
}
