import { useState } from 'react';
import GameView from '../../components/GameView';
import PopUp from '../../core/components/PopUp/PopUp';
import getDefinition from './definition';
import './style.scss';
export default function ProphecyView() {
	const [showTable, setShowTable] = useState(false);

	const btn = (
		<button
			className="btn selected nav-btn print-hide"
			onClick={() => setShowTable(true)}
		>
			<i className="bi bi-table"></i>
			Player Size <br />
			Table
		</button>
	);
	const table = (
		<PopUp onClose={() => setShowTable(false)}>
			<>
				<h2>Player Size Table</h2>
				<table
					className="table table-bordered"
					style={{
						maxWidth: '400px',
						margin: '0 auto',
						border: '2px solid black',
						borderCollapse: 'collapse',
						padding: '8px',
					}}
				>
					<thead>
						<tr>
							<th>Number of players</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<b>Number of cards dealt</b>
							</td>
							<td>17</td>
							<td>17</td>
							<td>15</td>
							<td>12</td>
							<td>10</td>
						</tr>
						<tr>
							<td>
								<b>Number of cards bid</b>
							</td>
							<td>4</td>
							<td>3</td>
							<td>3</td>
							<td>2</td>
							<td>2</td>
						</tr>
						<tr>
							<td>
								<b>Bonus Points</b>
							</td>
							<td>6</td>
							<td>5</td>
							<td>5</td>
							<td>4</td>
							<td>3</td>
						</tr>
						<tr>
							<td>
								<b>Reveal Bids</b>
							</td>
							<td>
								<i className="bi bi-x-lg"></i>
							</td>
							<td>
								<i className="bi bi-x-lg"></i>
							</td>
							<td>
								<i className="bi bi-check-lg"></i>
							</td>
							<td>
								<i className="bi bi-check-lg"></i>
							</td>
							<td>
								<i className="bi bi-check-lg"></i>
							</td>
						</tr>
					</tbody>
				</table>
			</>
		</PopUp>
	);
	return (
		<GameView
			definition={getDefinition()}
			afterTableElement={
				<>
					{showTable && table}
					{btn}
				</>
			}
		/>
	);
}
