import { useState } from 'react';
import BoardScorePage from '../../api/BoardScorePage/BoardScorePage';
import By from '../../components/By';
import Logo from '../../components/Logo';
import getDefinition from './definition';

export default function SeaSaltPaperView() {
	const [definition] = useState(getDefinition());
	//const [definition, setDefinition] = useState(getDefinition());
	//const [roundCounter, setRoundCounter] = useState(1);
	//const [totalRow, setTotalRow] = useState([0, 0, 0, 0]);

	/* const onSaveRound = () => {
		definition.rows.push({
			name: `Round ${roundCounter}`,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			staticNumber: totalRow,
		});
		setDefinition(definition);
		setRoundCounter(roundCounter + 1);
	}; */

	/* const roundBtn = (
		<button className="btn selected nav-btn print-hide" onClick={onSaveRound}>
			Save Round
		</button>
	); */
	/* const getTotalRow = (totalRow: number[]) => {
		setTotalRow(totalRow);
	}; */

	const logo = <Logo size={100} bgColor={definition.bgColor || '#fff'} />;
	return (
		<BoardScorePage
			definition={definition}
			logo={logo}
			//afterTableElement={roundBtn}
			//getTotalRow={getTotalRow}
		>
			<By />
		</BoardScorePage>
	);
}
