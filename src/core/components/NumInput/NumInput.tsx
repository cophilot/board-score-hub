import { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import './NumInput.scss';
import NumPad from '../NumPad/NumPad';
import { isSharedState } from '../../utils/functions';
import {
	useNumInputFocus,
	useNumInputLooseFocus,
} from './NumInputFocusManager';

interface NumInputProps {
	value?: number;
	name?: string;
	onChange?: (value: number) => void;
	transformNumber?: (value: number) => number;
	isNegative?: boolean;
}

function NumInput({
	value = 0,
	name = '',
	onChange,
	transformNumber = (v) => v,
	isNegative = false,
}: NumInputProps) {
	const onFocus = useNumInputFocus();
	const lostFocus = useNumInputLooseFocus();

	const [showNumPad, setShowNumPad] = useState(false);
	const [num, setNum] = useState<number>(value);
	const [aNum, setANum] = useState<number | undefined>(undefined);

	// Refs to keep latest values for callbacks registered externally (avoid stale closures)
	const numRef = useRef<number>(num);
	const aNumRef = useRef<number | undefined>(aNum);

	useEffect(() => {
		numRef.current = num;
		aNumRef.current = aNum;
	}, [num, aNum]);

	const merge = useCallback(
		(a: number, b: number | undefined): number => {
			return b === undefined ? a : isNegative ? a - b : a + b;
		},
		[isNegative],
	);

	const changed = useCallback(
		(v: number, aNum: number | undefined) => {
			v = transformNumber(v);
			if (isNegative && v > 0) {
				v = v * -1;
			}
			onChange && onChange(v + (aNum || 0));
			setNum(v);
			setANum(aNum);
		},
		[isNegative, onChange, transformNumber],
	);

	const onNumberClick = (n: number) => {
		if (aNum === undefined) {
			changed(addDigit(num, n), undefined);
			return;
		}
		changed(num, addDigit(aNum, n));
	};

	const onSignChangeClick = () => {
		if (aNum === undefined) {
			changed(num * -1, undefined);
			return;
		}
		changed(num, aNum * -1);
	};

	const onAddButtonClick = () => {
		if (num === 0) return;
		if (aNum === undefined) {
			setANum(0);
			return;
		}
		if (aNum === 0) return;
		changed(merge(num, aNum), 0);
	};

	const onDeleteClick = () => {
		if (num === 0) return;
		if (aNum === undefined) {
			changed(deleteDigit(num), undefined);
			return;
		}
		if (aNum === 0) {
			changed(num, undefined);
			return;
		}
		changed(num, deleteDigit(aNum));
	};
	const onLooseFocus = useCallback(() => {
		changed(merge(numRef.current, aNumRef.current), undefined);
		setShowNumPad(false);
	}, [changed, merge]);

	const onInputClick = useCallback(() => {
		setShowNumPad(true);
		onFocus(onLooseFocus);
	}, [onFocus, onLooseFocus]);

	const closeNumPad = () => {
		if (aNum !== undefined) {
			changed(merge(num, aNum), undefined);
		}
		setShowNumPad(false);
		lostFocus();
	};

	const numString = useMemo(() => {
		if (aNum === undefined) return parseNum(num);
		return `${parseNum(num)} ${isNegative ? '-' : '+'} ${parseNum(aNum)}`;
	}, [num, aNum, isNegative]);

	if (isSharedState()) {
		return <div className="NumInput">{parseNum(merge(num, aNum))}</div>;
	}

	return (
		<>
			{showNumPad && (
				<NumPad
					name={name}
					onNumberClick={onNumberClick}
					onPlusMinusClick={onSignChangeClick}
					onClose={closeNumPad}
					onBackspaceClick={onDeleteClick}
					onAddButtonClick={onAddButtonClick}
					isNegative={isNegative}
				/>
			)}
			<div
				className={'NumInput ' + (numString.length > 4 ? 'small-font' : '')}
				onClick={onInputClick}
			>
				{numString} {showNumPad && <div className="cursor"></div>}
			</div>
		</>
	);
}
export default NumInput;

function parseNum(n: number): string {
	if (n === 0) {
		return '';
	}
	return n.toString();
}

function deleteDigit(n: number): number {
	if (n === 0) return 0;
	const isNegative = n < 0;
	const newNum = Math.abs(n);
	return Math.floor(newNum / 10) * (isNegative ? -1 : 1);
}

function addDigit(n: number, digit: number): number {
	const isNegative = n < 0;
	const newNum = (Math.abs(n) * 10 + digit) * (isNegative ? -1 : 1);
	return newNum;
}
