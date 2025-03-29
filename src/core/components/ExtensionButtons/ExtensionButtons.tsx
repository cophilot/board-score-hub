import { useState } from 'react';
import './ExtensionButtons.scss';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ExtensionDefCollection } from '../../types/ExtensionDef';

interface ExtensionButtonsProps {
	extensionDefinition?: ExtensionDefCollection; // The extension definition
	initialSelectedExtensions?: string[]; // The initial selected extensions
	onExtensionOn?: (extensionName: string) => void; // The callback function when an extension is turned on
	onExtensionOff?: (extensionName: string) => void; // The callback function when an extension is turned off
}

/**
 * Enables the user to select extensions for the game.
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function ExtensionButtons({
	extensionDefinition = {},
	initialSelectedExtensions = [],
	onExtensionOn,
	onExtensionOff,
}: ExtensionButtonsProps) {
	//** START CONSTANTS **//
	const extensionsNames = Object.keys(extensionDefinition);
	//** END CONSTANTS **//

	//** START STATE **//
	const [selectedExtensions, setSelectedExtensions] = useState<string[]>(
		initialSelectedExtensions,
	);
	//** END STATE **//

	const handleExtensionClick = (extensionName: string) => {
		let newSelectedExtensions = [...selectedExtensions];

		let callback = undefined;
		if (selectedExtensions.includes(extensionName)) {
			newSelectedExtensions = selectedExtensions.filter(
				(name) => name !== extensionName,
			);
			callback = onExtensionOff;
		} else {
			newSelectedExtensions.push(extensionName);
			callback = onExtensionOn;
		}

		callback && callback(extensionName);
		setSelectedExtensions(newSelectedExtensions);
	};

	return (
		<div className="print-hide">
			{extensionsNames.length > 0 && <h2>Extensions</h2>}
			<div className="ex-btn-container">
				{extensionsNames.map((name) => (
					<ToggleButton
						label={name}
						checked={selectedExtensions.includes(name)}
						onChange={() => handleExtensionClick(name)}
					/>
				))}
			</div>
		</div>
	);
}

export default ExtensionButtons;
