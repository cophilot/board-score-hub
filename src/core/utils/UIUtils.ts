export default class UIUtils {
	static hideElementsWithClass(className: string) {
		const elements = document.getElementsByClassName(className);
		const displayStyles = [];
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i] as HTMLElement;
			displayStyles.push(element.style.display);
			element.style.display = 'none';
		}
		return displayStyles;
	}

	static showElementsWithClass(
		className: string,
		displayStyles: string[] = [],
		displayStyleFallback: string = 'block',
	) {
		const elements = document.getElementsByClassName(className);
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i] as HTMLElement;
			element.style.display = displayStyles[i] || displayStyleFallback;
		}
	}
}
