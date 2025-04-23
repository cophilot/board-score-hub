import WebFont from 'webfontloader';

export default class FontUtils {
	private static readonly HANDWRITING = 'Pacifico, cursive';
	static getHandwritingFont() {
		return this.loadFont(FontUtils.HANDWRITING);
	}

	private static readonly HANDWRITING_SIMPLE = 'Edu AU VIC WA NT Hand, cursive';
	static getHandwritingSimpleFont() {
		return this.loadFont(FontUtils.HANDWRITING_SIMPLE);
	}

	private static readonly ELEGANT = 'Great Vibes, cursive';
	static getElegantFont() {
		return this.loadFont(FontUtils.ELEGANT);
	}

	private static readonly PLAYFUL = 'Cardenio Modern, sans-serif';
	static getPlayfulFont() {
		return this.loadFont(FontUtils.PLAYFUL);
	}

	private static readonly MODERN = 'AvantGarde Bk BT, sans-serif';
	static getModernFont() {
		return this.loadFont(FontUtils.MODERN);
	}

	private static readonly FUTURISTIC = 'Realpolitik, sans-serif';
	static getFuturisticFont() {
		return this.loadFont(FontUtils.FUTURISTIC);
	}

	private static readonly ANCIENT = 'Julius Sans One, sans-serif';
	static getAncientFont() {
		return this.loadFont(FontUtils.ANCIENT);
	}

	private static readonly CLASSIC = 'Noto Serif Toto, sans-serif';
	static getClassicFont() {
		return this.loadFont(FontUtils.CLASSIC);
	}

	/* HELPER FUNCTION */

	private static loadFont(font: string) {
		this.loadWebFont(font);
		return font;
	}

	private static loadWebFont(font: string) {
		switch (font) {
			case FontUtils.MODERN:
				WebFont.load({
					custom: {
						families: ['AvantGarde Bk BT'],
						urls: ['https://fonts.cdnfonts.com/css/avantgarde-bk-bt-2'],
					},
				});
				break;

			case FontUtils.FUTURISTIC:
				WebFont.load({
					custom: {
						families: ['Realpolitik'],
						urls: ['https://fonts.cdnfonts.com/css/realpolitik'],
					},
				});
				break;

			case FontUtils.CLASSIC:
				WebFont.load({
					custom: {
						families: ['Noto Serif Toto'],
						urls: ['https://fonts.cdnfonts.com/css/noto-serif-toto'],
					},
				});
				break;

			case FontUtils.PLAYFUL:
				WebFont.load({
					custom: {
						families: ['Cardenio Modern'],
						urls: ['https://fonts.cdnfonts.com/css/cardenio-modern'],
					},
				});
				break;

			case FontUtils.ELEGANT:
				WebFont.load({
					google: {
						families: ['Great Vibes'],
					},
				});
				break;

			case 'Ubuntu':
				WebFont.load({
					google: {
						families: ['Ubuntu:300,400,500,700'],
					},
				});
				break;

			case FontUtils.HANDWRITING_SIMPLE:
				WebFont.load({
					google: {
						families: ['Edu AU VIC WA NT Hand:400..700'],
					},
				});
				break;

			case FontUtils.HANDWRITING:
				WebFont.load({
					google: {
						families: ['Pacifico'],
					},
				});
				break;

			case FontUtils.ANCIENT:
				WebFont.load({
					google: {
						families: ['Julius Sans One'],
					},
				});
				break;

			default:
				console.error(`FontUtils: Font "${font}" is not recognized.`);
				break;
		}
	}
}
