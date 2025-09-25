import { useEffect, useMemo, useState } from 'react';
import { RowDef } from '../../core/types/RowDef';
import BoardScore from '../../core';
import By from '../../components/By';
import getDefinition from './definition';
import LogoWithBanner from '../../components/LogoWithBanner';

export default function Flip7View() {
	const rowsLSKey = 'flip-seven-table-rows';

	const [extendRows, setExtendRows] = useState(true);
	const [rows, setRows] = useState<RowDef[]>([
		{
			name: 'Round 1',
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
		const def = getDefinition();
		def.rows = rows;
		return def;
	}, [rows]);

	const onCellChange = (row: number) => {
		if (!extendRows) {
			return;
		}
		if (row < rows.length - 1) {
			return;
		}
		const newRows = [
			...rows,
			{
				name: `Round ${rows.length + 1}`,
			},
		];
		setRows(newRows);
		localStorage.setItem(rowsLSKey, JSON.stringify(newRows));
	};

	const logo = (
		<LogoWithBanner
			title={definition.title}
			banner={definition.banner}
			logoBgColor={definition.bgColor}
		/>
	);

	return (
		<BoardScore
			definition={definition}
			onCellChange={onCellChange}
			logo={logo}
			onReset={() => {
				localStorage.removeItem(rowsLSKey);
			}}
			onClear={() => {
				localStorage.removeItem(rowsLSKey);
			}}
			getTotalRow={(row: number[]) => {
				if (row.find((v) => v >= 200) !== undefined) {
					setExtendRows(false);
					// remove the last row
					setRows((oldRows) => oldRows.slice(0, -1));
				}
			}}
		>
			<By />
		</BoardScore>
	);
}
