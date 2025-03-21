export interface RowDef {
	id?: string; // The ID of the row
	name: string; // The name of the row
	icon?: string; // The icon to be displayed for the row
	description?: string; // The description of the row
	bgColor?: string; // The background color to be used only for this row
	negative?: boolean; // Whether this row is negative
	fn?: (n: number) => number; // The function to calculate the score
	fnDisplay?: string; // A string to display the function
	//staticNumber?: number[]; // A static number to be displayed
}

export interface InternalRowDef extends RowDef {
	__extName?: string; // The name of the extension this row belongs to
}
