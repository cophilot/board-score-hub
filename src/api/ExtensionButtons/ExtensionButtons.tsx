import { useEffect, useState } from 'react';
import './ExtensionButtons.scss';
import GameStorage from '../utils/GameStorage';
import { ExtensionDef, GameDef } from '../types/GameDef';

interface ExtensionButtonsProps {
	definition: GameDef;
	onExtensionOn?: (
		extensionName: string,
		extensionDefinition: ExtensionDef,
	) => void;
	onExtensionOff?: (extensionName: string) => void;
}

/**
 * This is a ExtensionButtons component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-21
 */
function ExtensionButtons({
	definition,
	onExtensionOn,
	onExtensionOff,
}: ExtensionButtonsProps) {
	const extensionsDefinition = definition.extensions || {};
	const extensionsNames = Object.keys(extensionsDefinition);

	const [selectedExtensions, setSelectedExtensions] = useState<string[]>(
		GameStorage.getSelectedExtension(definition.title, []),
	);

	const handleExtensionClick = (extensionName: string) => {
		let newSelectedExtensions = [...selectedExtensions];
		if (selectedExtensions.includes(extensionName)) {
			newSelectedExtensions = selectedExtensions.filter(
				(name) => name !== extensionName,
			);
			onExtensionOff?.(extensionName);
		} else {
			newSelectedExtensions.push(extensionName);
			onExtensionOn?.(extensionName, extensionsDefinition[extensionName]);
		}

		GameStorage.setSelectedExtension(definition.title, newSelectedExtensions);
		setSelectedExtensions(newSelectedExtensions);
	};

	useEffect(() => {
		GameStorage.getSelectedExtension(definition.title, []).forEach(
			(extensionName: string) => {
				onExtensionOn?.(extensionName, extensionsDefinition[extensionName]);
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="print-hide">
			{extensionsNames.length > 0 && <h2>Extensions</h2>}
			{extensionsNames.map((name) => (
				<button
					key={name}
					className={
						'btn nav-btn ' +
						(selectedExtensions.includes(name) ? 'selected' : '')
					}
					onClick={() => handleExtensionClick(name)}
				>
					{name}
				</button>
			))}
		</div>
	);
}
export default ExtensionButtons;
