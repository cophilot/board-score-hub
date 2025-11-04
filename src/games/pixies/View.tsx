import { useState } from 'react';
import By from '../../components/By';
import getDefinition from './definition';
import { GameDef, Label } from '../../core/types/GameDef';
import LogoWithBanner from '../../components/LogoWithBanner';
import { RowDef } from '../../core/types/RowDef';
import BoardScore from '../../core';

export default function PixiesView() {
	const [def, setDef] = useState(getDefinition());
	const [fpOn, setFpOn] = useState(false);

	const ogRows = getDefinition().rows;
	const [rows, setRows] = useState(ogRows);
	const [labels, setLabels] = useState<Label[]>([]);

	const newRound = () => {
		let newLabels: Label[] = labels;
		if (labels.length === 0) {
			newLabels = [
				{
					beforeID: 'round-1',
					label: 'Round 1',
				},
			];
		}

		newLabels.push({
			beforeID: `round-${newLabels.length + 1}`,
			label: `Round ${newLabels.length + 1}`,
		});

		setLabels(newLabels);

		const addRows = JSON.parse(JSON.stringify(ogRows)) as RowDef[]; // deep copy
		addRows[0].id = `round-${newLabels.length}`;
		const newRows: RowDef[] = [...rows, ...addRows];

		setRows(newRows);
		const newDef: GameDef = { ...def, rows: newRows, labels: newLabels };
		setDef(newDef);
	};

	const roundBtn = (
		<button className="btn selected nav-btn print-hide" onClick={newRound}>
			<i className="bi bi-table"></i>New Round
		</button>
	);

	const logo = (
		<LogoWithBanner
			title={def.title}
			banner={def.banner}
			logoBgColor={def.bgColor}
		/>
	);
	return (
		<BoardScore
			definition={def}
			logo={logo}
			afterTableElement={roundBtn}
			onExtensionChange={(name, isActive) => {
				if (name === 'Flower Power') {
					setFpOn(isActive);
				}
			}}
			rowFilter={fpOn ? () => true : (rf: RowDef) => rf.id !== 'flower-power'}
		>
			<By />
		</BoardScore>
	);
}
