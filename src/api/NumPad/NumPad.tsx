import './NumPad.scss';

interface NumPadProps {
	onNumberClick: (num: number) => void;
	onClose?: () => void;
	onBackspaceClick?: () => void;
	name?: string;
}

function NumPad({
	onNumberClick,
	onClose,
	onBackspaceClick,
	name = '',
}: NumPadProps) {
	return (
		<div className="NumPad">
			<div className="row">
				<button className="btn small-btn left-top inverted name">{name}</button>
				<button className="btn small-btn right-top highlight" onClick={onClose}>
					Done
				</button>
			</div>
			<div className="row">
				<button className="btn" onClick={() => onNumberClick(1)}>
					1
				</button>
				<button className="btn" onClick={() => onNumberClick(2)}>
					2
				</button>
				<button className="btn" onClick={() => onNumberClick(3)}>
					3
				</button>
			</div>
			<div className="row">
				<button className="btn" onClick={() => onNumberClick(4)}>
					4
				</button>
				<button className="btn" onClick={() => onNumberClick(5)}>
					5
				</button>
				<button className="btn" onClick={() => onNumberClick(6)}>
					6
				</button>
			</div>
			<div className="row">
				<button className="btn" onClick={() => onNumberClick(7)}>
					7
				</button>
				<button className="btn" onClick={() => onNumberClick(8)}>
					8
				</button>
				<button className="btn" onClick={() => onNumberClick(9)}>
					9
				</button>
			</div>
			<div className="row">
				<button className="btn left-bottom inverted"></button>
				<button className="btn" onClick={() => onNumberClick(0)}>
					0
				</button>
				<button
					className="btn right-bottom inverted"
					onClick={onBackspaceClick}
				>
					<i className="bi bi-backspace"></i>
				</button>
			</div>
		</div>
	);
}
export default NumPad;
