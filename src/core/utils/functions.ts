export function isMobile(): boolean {
	return window.innerWidth <= 700;
}

export function getSharedStateUrlSeparator(): string {
	return '/share/';
}

export function isSharedState(): boolean {
	return window.location.href.includes(getSharedStateUrlSeparator());
}
