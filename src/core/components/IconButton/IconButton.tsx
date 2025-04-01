import './IconButton.scss';

interface IconButtonProps {
	children: JSX.Element | string;
	onClick: () => void;
	icon?: string;
	cls?: string;
	fill?: boolean;
}

/**
 * This is a IconButton component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-3-31
 */
function IconButton({
	children,
	onClick,
	icon,
	cls = '',
	fill = true,
}: IconButtonProps) {
	if (icon && !icon.startsWith('bi ')) {
		icon = 'bi ' + icon;
	}

	const isDoubleLine = children.toString().includes('\n');

	return (
		<button
			className={'icon-button btn nav-btn ' + (fill ? 'selected ' : '') + cls}
			onClick={onClick}
		>
			{icon && <i className={icon}></i>}
			{isDoubleLine ? (
				<span className="double-line">
					<span>{children.toString().split('\n')[0]}</span>
					<span>{children.toString().split('\n')[1]}</span>
				</span>
			) : (
				children
			)}
		</button>
	);
}
export default IconButton;
