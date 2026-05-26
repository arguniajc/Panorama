import { useState, useEffect, useCallback } from 'react'

export function useSlider(total: number, autoPlayMs = 5000) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    if (isPaused || total <= 1) return
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [isPaused, next, autoPlayMs, total])

  return { current, next, prev, goTo, setIsPaused }
}
