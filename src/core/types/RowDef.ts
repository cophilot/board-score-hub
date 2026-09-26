export interface RowDef {
	id?: string; // The ID of the row
	name: string; // The name of the row
	icon?: string; // The icon to be displayed for the row
	iconText?: RowIconTextDef; // The text to be displayed on the icon
	iconFn?: (playerSize: number) => string; // Function to get the icon based on player size
	description?: string; // The description of the row
	descriptionFn?: (playerSize: number) => string; // A function to get the description based on player size
	bgColor?: string; // The background color to be used only for this row
	fontColor?: string; // The font color to be used only for this row
	negative?: boolean; // Whether this row is negative
	fn?: (n: number) => number; // The function to calculate the score
	fnDisplay?: string; // A string to display the function
	checkValue?: number; // If set to a number, clicking the row will add that number to the score when clicked
	exclusiveCheck?: boolean; // If set to true, only one player can have a check in this row
	//staticNumber?: number[]; // A static number to be displayed
}

export interface RowIconTextDef {
	text: string; // The text to be displayed on the icon
	color?: string; // The color of the text to be displayed on the icon
	outlineColor?: string; // The outline color of the text to be displayed on the icon
	position?: 'center' | 'bottom' | 'top'; // The position of the text to be displayed on the icon. Default is 'center'
}

export interface InternalRowDef extends RowDef {
	__extName?: string; // The name of the extension this row belongs to
	__visible?: boolean; // Whether this row is visible
}
