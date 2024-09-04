import { ReactNode } from "react"

export default function MainFramework({ children }: {
  children: ReactNode
}) {
  return <main className="flex flex-col min-h-screen items-center justify-nomarl lg:p-24">
    {children}
  </main>
} 