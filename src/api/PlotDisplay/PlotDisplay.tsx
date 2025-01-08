import { useMemo, useState } from 'react';
import { GameDef } from '../types/GameDef';
import './PlotDisplay.scss';
import ReactECharts from 'echarts-for-react'; // import reactecharts

interface PlotDisplayProps {
	definition: GameDef;
	tableMatrix: number[][];
	playerNames: string[];
	onClose: () => void;
}

/**
 * Show the game statistics in a plot
 * @author cophilot
 * @version 1.0.0
 * @created 2024-12-29
 */
function PlotDisplay({
	definition,
	playerNames,
	tableMatrix,
	onClose,
}: PlotDisplayProps) {
	const [isRotated, setRotate] = useState(false);
	const [isBar, setIsBar] = useState(false);
	const [isCumulative, setIsCumulative] = useState(false);

	const series = useMemo(() => {
		
		return playerNames.map((playerName, index) => {
			
			let before: (number | undefined) = undefined;
			const data = tableMatrix
				.map((row) => row[index])
				.map((value) => {
					value = value || 0;
					if (isCumulative && before !== undefined) {
						value = value + before!;
					}
					before = value;
					return value;
				});

			return {
				symbolSize: getFontSize(),
				name: playerName,
				type: isBar ? 'bar' : 'line',
				data: data,
				smooth: true,
				lineStyle: {
					normal: {
						width: 5,
					},
				},
			};
		});
	}, [playerNames, tableMatrix, isBar, isCumulative]);

	return (
		<div className="plot-display">
			<div id="plot">
				<ReactECharts
					className={isRotated ? 'rotated' : ''}
					option={getOptions(definition, series)}
					style={{
						height: isRotated ? '100vw' : '90vh',
						minWidth: isRotated ? '90vh' : '100vw',
						color: definition.fontColor,
					}}
				/>
			</div>
			<div className="control-panel">
				<div onClick={() => setRotate(!isRotated)}>
					<i className="bi bi-arrow-counterclockwise"></i>
				</div>
				<div onClick={() => setIsBar(!isBar)}>
					{isBar ? (
						<i className="bi bi-bar-chart-line"></i>
					) : (
						<i className="bi bi-graph-up"></i>
					)}
				</div>

				<div onClick={()=> setIsCumulative(!isCumulative)}>
					{isCumulative ? (
						<i className="bi bi-stop-circle"></i>

					) : (
						<i className="bi bi-plus-circle"></i>
					)}
				</div>
				<div onClick={onClose}>
					<i className="bi bi-x-lg"></i>
				</div>
			</div>
		</div>
	);
}
export default PlotDisplay;

function getOptions(definition: GameDef, series: unknown) {
	return {
		title: {
			text: definition.title,
			subtext: new Date().toLocaleDateString(),
			left: 'center',
			textStyle: {
				color: definition.fontColor,
			},
			subtextStyle: {
				color: definition.fontColor,
				fontSize: getFontSize() - 2,
			},
		},
		color: [
			definition.primaryColor || '#c23531',
			definition.secondaryColor || '#2f4554',
			'#61a0a8',
			'#d48265',
			'#91c7ae',
			'#749f83',
			'#ca8622',
			'#bda29a',
			'#6e7074',
			'#546570',
			'#c4ccd3',
		],
		legend: {
			orient: 'vertical',
			left: 'left',
			textStyle: {
				color: definition.fontColor,
				rich: {
					count: {
						align: 'right',
					},
				},
				fontSize: getFontSize(),
			},
		},
		xAxis: {
			data: definition.rows.map((row) => row.name.replace(/ /g, '\n')),
			axisLine: {
				lineStyle: {
					color: definition.fontColor,
				},
			},
			axisLabel: {
				color: definition.fontColor,
				fontSize: getFontSize(),
			},
			splitLine: {
				lineStyle: {
					color: definition.fontColor,
				},
			},
		},
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: definition.fontColor,
				},
			},
			axisLabel: {
				color: definition.fontColor,
				fontSize: getFontSize(),
			},
			splitLine: {
				lineStyle: {
					color: definition.fontColor,
				},
			},
		},
		series: series,
	};
}

function getFontSize() {
	if (window.innerWidth < 700) {
		return 16;
	}
	return 20;
}
