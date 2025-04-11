export default class StyleUtils {
	static setBackGroundColor(color: string = 'white') {
		document.documentElement.style.setProperty('--bg-color', color);
	}

	static setFontColor(color: string = 'black') {
		document.documentElement.style.setProperty('--font-color', color);
	}

	static setPrimaryColor(color: string = '#436fe9') {
		document.documentElement.style.setProperty('--primary-color', color);
	}

	static setSecondaryColor(color: string = '#E9BD43') {
		document.documentElement.style.setProperty('--secondary-color', color);
	}
	static setFontFamily(fontFamily: string = 'Ubuntu') {
		document.documentElement.style.setProperty('--font-family', fontFamily);
	}

	static setDefaultValues(darkMode: boolean = false) {
		const colors = StyleUtils.getDefaultColors(darkMode);
		StyleUtils.setBackGroundColor(colors.bgColor);
		StyleUtils.setFontColor(colors.fontColor);
		StyleUtils.setPrimaryColor(colors.primaryColor);
		StyleUtils.setSecondaryColor(colors.secondaryColor);
		StyleUtils.setFontFamily();
	}

	static getDefaultColors(darkMode: boolean = false) {
		if (darkMode) {
			return {
				bgColor: '#1D2B53',
				fontColor: '#FFFFFF',
				primaryColor: '#FF004D',
				secondaryColor: '#FAEF5D',
			};
		} else {
			return {
				bgColor: '#FFFFFF',
				fontColor: '#000000',
				primaryColor: '#436FE9',
				secondaryColor: '#E9BD43',
			};
		}
	}
}
