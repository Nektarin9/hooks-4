import { useCallback, useState } from "react"
import { useWindowEvent } from "./Demo"

interface ViewportSize {
	width: number
	height: number
}


export const useViewportSize = () => {
	const [viewportSize, setViewportSize] = useState<ViewportSize>({
		width: window.innerWidth,
		height: window.innerHeight
	})

	const showViewportSize = useCallback(() => {
		setViewportSize({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}, [])

	useWindowEvent("resize", showViewportSize)

	return {...viewportSize}
}
