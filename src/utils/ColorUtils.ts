export default class ColorUtils {
    /**
     * Converts a hex color to an RGB array.
     * @param hex - The hex color string.
     * @returns An array with the RGB values.
     */
    static hexToRgb(hex: string): [number, number, number] {
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, '');

        // Parse r, g, b values
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return [r, g, b];
    }

    /**
     * Calculates the luminance of an RGB color.
     * @param rgb - An array with the RGB values.
     * @returns The luminance value.
     */
    static luminance(rgb: [number, number, number]): number {
        const [r, g, b] = rgb.map((v) => {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    /**
     * Determines if the color is dark.
     * @param color - The hex color string.
     * @returns True if the color is dark, otherwise false.
     */
    static isDarkColor(color: string): boolean {
        const rgb = this.hexToRgb(color);
        const lum = this.luminance(rgb);
        return lum < 0.05;
    }
}
