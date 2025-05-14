'use client'

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function ProjectSheet({
    title,
    description,
    tech = [],
    github,
    children, // This can be the button or card that triggers the sheet
}: {
    title: string
    description: string
    tech?: string[]
    github?: string
    children: React.ReactNode
}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#0f172a] text-white">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-300">{description}</p>

                    {tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tech.map((t) => (
                                <span
                                    key={t}
                                    className="bg-white/10 text-xs px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-blue-400 hover:underline text-sm"
                        >
                            <Github size={16} />
                            View on GitHub
                        </Link>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}
