import { useState } from 'react';
import GameView from '../../components/GameView';
import getDefinition from './definition';
import './style.scss';
import PathUtils from '../../core/utils/PathUtils';

export default function ExplorersView() {
	const def = getDefinition();
	return (
		<GameView
			definition={def}
			beforeTableElement={<RandomTilePlacer pu={new PathUtils(def.title)} />}
		/>
	);
}

function RandomTilePlacer({ pu }: { pu: PathUtils }) {
	const achievmentsPath = 'achievements/';

	const [randomNumbers] = useState<number[]>(getRandomNumbers(8));
	const [achievementsFirstIx] = useState<number[]>(
		getRandomNumbers(8, 3, true, randomNumbers),
	);
	const [achievementsSecondIx] = useState<number[]>(getRandomNumbers(4, 3));

	const [rotations] = useState<number[]>(
		getRandomNumbers(4, 4, false, [], (x) => (x - 1) * 90),
	);

	return (
		<div className="random-tile-placer">
			<div className="achievements">
				{achievementsFirstIx.map((ix, index) => (
					<div key={index} className="achievement">
						<img
							src={pu.getAbsoluteImagePath(
								achievmentsPath + `${ix}-${achievementsSecondIx[index]}`,
							)}
							alt={`Achievement ${ix}`}
							className="achievement-icon"
						/>
						<p className="achievement-text">({ix})</p>
					</div>
				))}
			</div>
			<div className="tile-grid">
				{randomNumbers.map((num, index) => (
					<div key={index} className="tile">
						<p
							className="tile-number"
							style={{ transform: `rotate(${rotations[index]}deg)` }}
						>
							{num}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

function getRandomNumbers(
	max: number,
	length: number = 4,
	avoidDuplicates: boolean = true,
	excludeNumbers: number[] = [],
	numberFn: (x: number) => number = (x) => x,
): number[] {
	const numbers = Array.from({ length: max }, (_, i) => i + 1);
	const randomNumbers = [];
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * numbers.length);
		if (excludeNumbers.includes(numbers[randomIndex])) {
			i--;
			continue;
		}
		randomNumbers.push(numberFn(numbers[randomIndex]));
		if (avoidDuplicates) {
			numbers.splice(randomIndex, 1);
		}
	}
	return randomNumbers;
}
