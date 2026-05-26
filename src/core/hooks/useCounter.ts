import { useState, useEffect } from 'react'

export function useCounter(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}
