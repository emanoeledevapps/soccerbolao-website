"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  alignRight?: boolean
  label: string
  value: number
  suffix?: string
}

export function StatsCard({ alignRight, label, value, suffix }: Props) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.5
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    if (value === 0) return

    const start = 0
    const end = value
    const duration = 2000
    const startTime = performance.now()

    const animate = (timestamp: number) => {
      const progress = (timestamp - startTime) / duration
      const currentValue = Math.min(start + (end - start) * progress, end)
      setDisplayValue(Math.floor(currentValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isVisible])

  return (
    <div className={`flex w-full ${alignRight && 'justify-end'} mt-[-20px]`}>
      <div 
        className="flex flex-col justify-center h-[150px] w-[380px] rounded-2xl p-3 bg-white shadow-2xl border-2 shadow-black"
        ref={cardRef}
      >
        <h4 className="font-bold text-5xl text-green-1">
          {Intl.NumberFormat('pt-BR').format(displayValue)} {suffix && suffix}
        </h4>
        <p className="text-gray-1">{label}</p>
      </div>
    </div>
  )
}
