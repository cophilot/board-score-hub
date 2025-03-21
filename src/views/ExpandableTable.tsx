import { useEffect, useMemo, useState } from 'react';
import BoardScorePage from '../core/main/BoardScorePage/BoardScorePage';
import { WinMode } from '../core/types/WinMode';
import By from '../components/By';
import Logo from '../components/Logo';
import { useIsDarkModeEnabled } from '../providers/ThemeProvider';
import { RowDef } from '../core/types/RowDef';

export default function ExpandableTable() {
	const rowsLSKey = 'expandable-table-rows';
	const isDarkModeEnabled = useIsDarkModeEnabled();

	const [rows, setRows] = useState<RowDef[]>([
		{
			name: 'Row 1',
		},
	]);

	useEffect(() => {
		const storedRows = localStorage.getItem(rowsLSKey);
		if (storedRows) {
			const parsedRows = JSON.parse(storedRows);
			setRows(parsedRows);
		}
	}, []);

	const definition = useMemo(() => {
		return {
			title: 'Expandable Table',
			playerSizes: [1, 2, 3, 4, 5, 6],
			winMode: WinMode.NONE,
			rows: rows,
			stripeColor: isDarkModeEnabled() ? '#15203f' : '#d8d8d8',
		};
	}, [rows, isDarkModeEnabled]);

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
		localStorage.setItem(rowsLSKey, JSON.stringify(newRows));
	};

	const logo = <Logo size={100} detectDarkMode />;

	return (
		<BoardScorePage
			definition={definition}
			onCellChange={onCellChange}
			logo={logo}
			isDarkModeEnabled={isDarkModeEnabled()}
			onReset={() => {
				localStorage.removeItem(rowsLSKey);
			}}
			onClear={() => {
				localStorage.removeItem(rowsLSKey);
			}}
		>
			<By />
		</BoardScorePage>
	);
}
