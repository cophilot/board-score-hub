import { useState } from 'react';
import './NumInput.scss';
import NumPad from '../NumPad/NumPad';
import {
	useNumInputFocus,
	useNumInputLooseFocus,
} from './NumInputFocusManager';

interface NumInputProps {
	value?: number;
	name?: string;
	onChange?: (value: number) => void;
	transformNumber?: (value: number) => number;
}

function NumInput({
	value = 0,
	name = '',
	onChange,
	transformNumber,
}: NumInputProps) {
	const onFocus = useNumInputFocus();
	const lostFocus = useNumInputLooseFocus();

	const [showNumPad, setShowNumPad] = useState(false);
	const [num, setNum] = useState<number>(value);

	const changed = (v: number) => {
		if (transformNumber) {
			v = transformNumber(v);
		}
		onChange && onChange(v);
		setNum(v);
	};

	const onNumberClick = (n: number) => {
		const isNegative = num < 0;
		const newNum = (Math.abs(num) * 10 + n) * (isNegative ? -1 : 1);
		changed(newNum);
	};

	const onSignChange = () => {
		changed(num * -1);
	};

	const onDeleteClick = () => {
		if (num === 0) return;
		const isNegative = num < 0;
		let newNum = Math.abs(num);
		newNum = Math.floor(newNum / 10) * (isNegative ? -1 : 1);
		changed(newNum);
	};

	const onInputClick = () => {
		setShowNumPad(true);
		onFocus(() => setShowNumPad(false));
	};

	const closeNumPad = () => {
		setShowNumPad(false);
		lostFocus();
	};

	return (
		<>
			{showNumPad && (
				<NumPad
					name={name}
					onNumberClick={onNumberClick}
					onClose={closeNumPad}
					onBackspaceClick={onDeleteClick}
					onSignChange={onSignChange}
				/>
			)}
			<div className="NumInput" onClick={onInputClick}>
				{num !== 0 && num} {showNumPad && <div className="cursor"></div>}
			</div>
		</>
	);
}
export default NumInput;
