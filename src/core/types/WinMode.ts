export enum WinMode {
	MOST = 'most',
	LEAST = 'least',
	NONE = 'none',
}

export function getFunctionForWinMode(mode: WinMode) {
	switch (mode) {
		case WinMode.MOST:
			return Math.max;
		case WinMode.LEAST:
			return Math.min;
		case WinMode.NONE:
			return () => undefined;
	}
}
