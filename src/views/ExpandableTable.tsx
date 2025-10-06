import { useEffect, useMemo, useState } from 'react';
import { WinMode } from '../core/types/WinMode';
import By from '../components/By';
import Logo from '../components/Logo';
import { useIsDarkModeEnabled } from '../providers/ThemeProvider';
import { RowDef } from '../core/types/RowDef';
import BoardScore from '../core';

const ROWS_LS_KEY = 'expandable-table-rows';
const WIN_MODE_LS_KEY = 'expandable-table-win-mode';

export default function ExpandableTable() {
	const isDarkModeEnabled = useIsDarkModeEnabled();

	const [rows, setRows] = useState<RowDef[]>([
		{
			name: 'Row 1',
		},
	]);
	const [winMode, setWinModeState] = useState<WinMode>(WinMode.MOST);

	const setWinMode = (mode: WinMode) => {
		setWinModeState(mode);
		localStorage.setItem(WIN_MODE_LS_KEY, mode);
	};

	useEffect(() => {
		const storedRows = localStorage.getItem(ROWS_LS_KEY);
		storedRows && setRows(JSON.parse(storedRows));

		const storedWinMode = localStorage.getItem(WIN_MODE_LS_KEY) as WinMode;
		storedWinMode && setWinModeState(storedWinMode);
	}, []);

	const definition = useMemo(() => {
		return {
			title: 'Expandable Table',
			playerSizes: [1, 2, 3, 4, 5, 6],
			winMode: winMode,
			rows: rows,
			stripeColor: isDarkModeEnabled() ? '#15203f' : '#d8d8d8',
		};
	}, [rows, isDarkModeEnabled, winMode]);

	const onCellChange = (row: number) => {
		if (row < rows.length - 1) {
			return;
		}
		const newRows = [
			...rows,
			{
				name: `Row ${rows.length + 1}`,
			},
		];
		setRows(newRows);
		localStorage.setItem(ROWS_LS_KEY, JSON.stringify(newRows));
	};

	const logo = <Logo size={100} detectDarkMode />;

	return (
		<BoardScore
			definition={definition}
			onCellChange={onCellChange}
			logo={logo}
			isDarkModeEnabled={isDarkModeEnabled()}
			onReset={() => {
				localStorage.removeItem(ROWS_LS_KEY);
			}}
			onClear={() => {
				localStorage.removeItem(ROWS_LS_KEY);
			}}
			userButtons={[
				{
					label:
						'Use ' +
						(definition.winMode === WinMode.MOST ? ' Least' : ' Most') +
						' to Win',
					onClick: () => {
						setWinMode(
							definition.winMode === WinMode.MOST
								? WinMode.LEAST
								: WinMode.MOST,
						);
					},
					iconClass: 'bi bi-arrow-left-right',
				},
			]}
		>
			<By />
		</BoardScore>
	);
}
