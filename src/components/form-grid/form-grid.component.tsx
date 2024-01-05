"use client"

import { FormHTMLAttributes, ReactNode } from "react"

interface FormGridProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export default function FormGrid({
  children,
  className,
  ...props
}: FormGridProps) {
  console.log(props)
  return (
    <form
      className={`grid gap-7 p-5${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </form>
  )
}
