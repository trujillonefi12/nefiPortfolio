'use client'

import { useEffect, useState } from 'react'

export function PageLoader({ delay = 800, children }: { delay?: number; children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="flex flex-col items-center space-y-4">
                    {/* Three dot loading animation */}
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                                style={{
                                    animationDelay: `${i * 0.15}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-blue-800 font-medium">Welcome to my portfolio</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}