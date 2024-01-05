"use client"

import { FormHTMLAttributes, ReactNode } from "react"

export default function FormGrid({
  children,
  className,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={`grid gap-7 p-5${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </form>
  )
}
