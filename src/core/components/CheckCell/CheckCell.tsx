import './CheckCell.scss';

interface CheckCellProps {
	checkValue: number;
	currentValue: number;
	onClick?: (value: number) => void;
}

/**
 * CheckCell component represents a cell that can be checked or unchecked.
 * @author cophilot
 * @version 1.0.0
 * @created 2025-10-31
 */
function CheckCell({ currentValue, checkValue, onClick }: CheckCellProps) {
	const isChecked = currentValue === checkValue;

	const click = () => {
		const newValue = isChecked ? 0 : checkValue;
		onClick && onClick(newValue);
	};
	return (
		<div className="check-cell" onClick={click}>
			{isChecked ? (
				<div className="checked">
					<div className="check">
						<i className="bi bi-check2"></i>
					</div>
					<div className="value">{checkValue}</div>
				</div>
			) : (
				<div className="square"></div>
			)}
		</div>
	);
}
// {currentValue !== 0 && '✔'}
export default CheckCell;
