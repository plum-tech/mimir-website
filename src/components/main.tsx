import { ReactNode } from "react"

export default function MainFramework({
  children, className
}: {
  children: ReactNode
  className?: string
}) {
  // TODO: Remove "flex flex-col" for desktop support
  return <main className={`flex flex-col min-h-screen items-center justify-nomarl lg:p-24 ${className}`} >
    {children}
  </main >
} 