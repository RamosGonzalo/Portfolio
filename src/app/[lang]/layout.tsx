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
                <main className="mb-20">{children}</main> 
            <Footer />
        </LangProvider>
    )
}
