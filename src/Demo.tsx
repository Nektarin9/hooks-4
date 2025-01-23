import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useViewportSize } from './useViewportSize';

export function useWindowEvent(type, listener) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener);
			return () => window.removeEventListener(type, listener);
		}
	}, [type, listener]);
}

export function Demo() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}
