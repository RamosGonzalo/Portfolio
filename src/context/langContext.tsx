"use client"

import { createContext, useContext } from "react"
import { useParams } from "next/navigation"

type Lang = "en" | "es"
const LangContext = createContext<Lang>("en")

export function LangProvider({ children }: { children: React.ReactNode }) {
    const params = useParams()
    const langParam = params?.lang as Lang

    const lang: Lang = langParam === "es" ? "es" : "en"

    return (
        <LangContext.Provider value={lang}>
        {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext)