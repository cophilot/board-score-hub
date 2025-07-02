import { RowDef } from './RowDef';

export type ExtensionDefCollection = { [name: string]: ExtensionDef };

export interface ExtensionDef {
	rows: RowDef[]; // The rows to add for this extension
	excludeRows?: string[];
}
