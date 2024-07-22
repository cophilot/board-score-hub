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

    static setSecondaryColor(color: string = '#f7eb83') {
        document.documentElement.style.setProperty('--secondary-color', color);
    }

    static setDefaultValues() {
        StyleUtils.setBackGroundColor();
        StyleUtils.setFontColor();
        StyleUtils.setPrimaryColor();
        StyleUtils.setSecondaryColor();
    }
}
