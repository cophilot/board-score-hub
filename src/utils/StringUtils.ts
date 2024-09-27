export default class StringUtils {
	static removeAllSpecialCharacters(str: string): string {
		// remove all special characters but keep spaces
		return str.replace(/[^a-zA-Z0-9 ]/g, '');
	}

	static gameNameToPath(gameName: string): string {
		return StringUtils.removeAllSpecialCharacters(
			gameName.toLowerCase(),
		).replace(/ /g, '-');
	}
}
