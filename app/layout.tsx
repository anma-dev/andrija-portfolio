'use client'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Spinner } from '@/components/SpinnerSection'
import { useEffect, useState } from 'react'

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 700)
    }, [])
    return (
        <html lang="en">
            <head>
                <title>Andrija Matic</title>
                <link rel="icon" href="logo.jpg" />
            </head>
            <body className={`text-text bg-background dark`}>
                {!loading ? (
                    <div className="flex h-screen flex-col justify-center">
                        <div className="m-auto">
                            <Spinner />
                        </div>
                    </div>
                ) : (
                    <>
                        <Navbar />
                        {children}
                        <Toaster />
                    </>
                )}
            </body>
        </html>
    )
}
