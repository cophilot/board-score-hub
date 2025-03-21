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
		if (darkMode) {
			StyleUtils.setBackGroundColor('#1D2B53');
			StyleUtils.setFontColor('#fff');
			StyleUtils.setPrimaryColor('#FF004D');
			StyleUtils.setSecondaryColor('#FAEF5D');
		} else {
			StyleUtils.setBackGroundColor();
			StyleUtils.setFontColor();
			StyleUtils.setPrimaryColor();
			StyleUtils.setSecondaryColor();
		}
		StyleUtils.setFontFamily();
	}
}
