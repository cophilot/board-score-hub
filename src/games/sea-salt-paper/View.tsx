import { useState } from 'react';
import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import By from '../../components/By';
import Logo from '../../components/Logo';
import getDefinition from './definition';
import { GameDef, Label, RowDef } from '../../api/types/GameDef';

export default function SeaSaltPaperView() {
	const [def, setDef] = useState(getDefinition());

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

	const logo = <Logo size={100} bgColor="#000" />;
	return (
		<BoardScorePage
			definition={def}
			logo={logo}
			afterTableElement={roundBtn}
			//getTotalRow={getTotalRow}
		>
			<By />
		</BoardScorePage>
	);
}