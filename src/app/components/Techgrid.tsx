// components/TechGrid.tsx
export default function TechGrid({
    title,
    items,
}: {
    title: string
    items: { name: string; logo: string; bg: string }[]
}) {
    return (
        <div className="mb-6">
            <h3 className="text-md font-semibold text-neutral-300 mb-2">{title}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2">
                {items.map(({ name, logo, bg }) => (
                    <li
                        key={name}
                        className="flex items-center gap-3 rounded-md p-3 backdrop-blur-2xl bg-white/5 dark:bg-white/5"
                    >
                        <div
                            className="p-2 flex items-center justify-center rounded-lg"
                            style={{ backgroundColor: bg }}
                        >
                            <img src={logo} alt={`${name} logo`} className="w-5 h-5" />
                        </div>
                        <span className="text-sm md:text-base font-medium">{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
