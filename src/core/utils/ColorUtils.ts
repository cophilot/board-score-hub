export default class ColorUtils {
	static getContrastRatio(hex1: string, hex2: string): number {
		function hexToRgb(hex: string): [number, number, number] {
			const normalizedHex = hex.replace('#', '');
			const bigint = parseInt(
				normalizedHex.length === 3
					? normalizedHex
							.split('')
							.map((c) => c + c)
							.join('')
					: normalizedHex,
				16,
			);
			return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
		}

		function luminance([r, g, b]: [number, number, number]): number {
			const toLinear = (c: number): number => {
				const channel = c / 255;
				return channel <= 0.03928
					? channel / 12.92
					: Math.pow((channel + 0.055) / 1.055, 2.4);
			};

			const [R, G, B] = [r, g, b].map(toLinear);
			return 0.2126 * R + 0.7152 * G + 0.0722 * B;
		}

		hex1 = ColorUtils.extendHexColor(hex1);
		hex2 = ColorUtils.extendHexColor(hex2);

		const lum1 = luminance(hexToRgb(hex1));
		const lum2 = luminance(hexToRgb(hex2));

		const lighter = Math.max(lum1, lum2);
		const darker = Math.min(lum1, lum2);

		const contrastRatio = (lighter + 0.05) / (darker + 0.05);
		return parseFloat(contrastRatio.toFixed(2));
	}

	static extendHexColor(hex: string): string {
		if (hex === '#000') {
			return '#000000';
		}
		if (hex === '#fff') {
			return '#ffffff';
		}
		if (hex.length === 4) {
			return `#${hex
				.slice(1)
				.split('')
				.map((c) => c + c)
				.join('')}`;
		}
		return hex;
	}

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
			return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
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
