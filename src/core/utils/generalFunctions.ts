/**
 * Call the callback function if the attribute is not undefined or null
 */
export function callIfArgIsPresent<T>(
	attribute: T | undefined | null,
	callback: (arg0?: T) => void,
) {
	if (attribute !== undefined && attribute !== null) {
		callback(attribute);
	}
}
