import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className="block max-w-sm p-6 bg-white border border-gray-400 rounded-2xl shadow  ">
    {children}
  </div>
}