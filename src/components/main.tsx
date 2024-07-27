import { ReactNode } from "react"

export default function MainFramework({ children }: {
  children: ReactNode
}) {
  return <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
    {children}
  </main>
} 