export interface GameDef {
	title: string; // The name of the game
	playerSizes: number[]; // An array of all possible player counts
	rows: RowDef[]; // An array of rows
	bgColor?: string; // The background color to be used
	fontColor?: string; // The font color to be used
	primaryColor?: string; // The primary color to be used
	secondaryColor?: string; // The secondary color to be used
	stripeColor?: string; // The color of the stripes
	fontFamily?: string; // The font family to be used
	url?: string; // The URL to the game
	rulesUrl?: string; // The URL to the rules
	winMode?: string; // The winnning mode
	extensions?: { [name: string]: ExtensionDef }; // Specify Extensions
	roundMapper?: { [playerCount: number]: number }; // A mapping of player count to round count
}

export interface RowDef {
	name: string; // The name of the row
	icon?: string; // The icon to be displayed for the row
	description?: string; // The description of the row
	bgColor?: string; // The background color to be used only for this row
	negative?: boolean; // Whether this row is negative
}

export interface ExtensionDef {
	rows: RowDef[]; // The rows to add for this extension
}
