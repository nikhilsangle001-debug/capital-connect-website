'use client'

import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return value
}

export function Counter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  start,
}: {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  start: boolean
}) {
  const current = useCountUp(value, 1800, start)
  return (
    <span>
      {prefix}
      {current.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}
