import { LangProvider } from "@/context/langContext";
import Navbar from "@/components/Navbar";

export default function LangLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <LangProvider>
            <Navbar />
            <main className="mb-20">{children}</main>
        </LangProvider>
    );
}
