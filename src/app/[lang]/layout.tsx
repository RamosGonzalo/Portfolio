import { LangProvider } from "@/context/langContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LangLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LangProvider>
            <Navbar />
                {children}
            <Footer />
        </LangProvider>
    )
}
