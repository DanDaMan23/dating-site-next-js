"use client"

import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes
} from "react"

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

interface FormFieldGroupGridProps {
  children: ReactNode
  className?: string
}

export function FormFieldGroup({
  children,
  className
}: FormFieldGroupGridProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 gap-2${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  )
}

interface InputGroupProps {
  className?: string
  input: ReactNode
  error?: ReactNode
}

export function InputGroup({ className, input, error }: InputGroupProps) {
  return (
    <div className={`grid gap-2 col-span-2${className ? ` ${className}` : ""}`}>
      {input}
      {error && error}
    </div>
  )
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`rounded-md text-black${className ? ` ${className}` : ""}`}
      {...props}
    />
  )
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`rounded-md text-black${className ? ` ${className}` : ""}`}
      {...props}
    />
  )
}

interface ErrorProps {
  className?: string
  label: string
}

export function FormError({ className, label }: ErrorProps) {
  return (
    <p className={`text-red-500${className ? ` ${className}` : ""}`}>{label}</p>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
}

export function Button({
  className,
  children,
  variant,
  ...props
}: ButtonProps) {
  const primaryClass = "border-black bg-white text-black"

  return (
    <button
      className={`${
        variant === "primary" && `${primaryClass} `
      }border-solid border-2 rounded-md p-1${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  )
}
