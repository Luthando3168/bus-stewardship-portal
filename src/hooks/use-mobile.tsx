
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with the current window width if available
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    // Default to false for SSR
    return false
  })

  React.useEffect(() => {
    // Skip if window is not available (SSR)
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Initial check
    handleResize()
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}
