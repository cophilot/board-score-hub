export default class StringUtils {
    static gameNameToPath(gameName: string): string {
        return gameName
            .toLowerCase()
            .replace(/-/g, '')
            .replace(/:/g, '')
            .replace(/ /g, '-');
    }
}
