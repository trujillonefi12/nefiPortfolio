import ProjectSheet from '@/app/components/Projectsheet'

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>

            <div className="grid gap-6 sm:grid-cols-2">
                <ProjectSheet
                    title="Dashboard"
                    description="An admin dashboard built with Next.js, Tailwind, and Prisma."
                    tech={['Next.js', 'Tailwind', 'Prisma']}
                    github="https://github.com/yourname/dashboard"
                >
                    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer">
                        <h3 className="text-lg font-semibold">Dashboard</h3>
                        <p className="text-sm text-gray-400">Click to view more details →</p>
                    </div>
                </ProjectSheet>
            </div>
        </main>
    )
}
