"use client"

export const ToLocaleDateString = ({
  date
}: {
  date: Date
}) => {
  return date.toLocaleDateString()
}

export const ToLocaleString = ({
  date
}: {
  date: Date
}) => {
  return date.toLocaleString()
}