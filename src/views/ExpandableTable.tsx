import { useEffect, useMemo, useState } from 'react';
import BoardScorePage from '../api/BoardScorePage/BoardScorePage';
import { WinMode } from '../api/types/WinMode';
import By from '../components/By';
import Logo from '../components/Logo';

export default function ExpandableTable() {
    const rowsLSKey = 'expandable table-rows';

    const [rows, setRows] = useState([
        {
            name: 'Row 1',
        },
    ]);

    useEffect(() => {
        const storedRows = localStorage.getItem(rowsLSKey);
        if (storedRows) {
            setRows(JSON.parse(storedRows));
        }
    }, []);

    const definition = useMemo(() => {
        return {
            title: 'Expandable Table',
            playerSizes: [1, 2, 3, 4, 5, 6],
            winMode: WinMode.NONE,
            rows: rows,
            stripColor: '#d8d8d8',
        };
    }, [rows]);

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
    const logo = <Logo size={100} />;

    return (
        <BoardScorePage
            definition={definition}
            onCellChange={onCellChange}
            logo={logo}>
            <By />
        </BoardScorePage>
    );
}
