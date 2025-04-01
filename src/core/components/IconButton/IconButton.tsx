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
	icon = '',
	cls = '',
	fill = true,
}: IconButtonProps) {
	if (!icon.startsWith('bi ')) {
		icon = 'bi ' + icon;
	}
	return (
		<button
			className={'btn nav-btn ' + (fill ? 'selected ' : '') + cls}
			onClick={onClick}
		>
			{icon && <i className={icon}></i>}
			{children}
		</button>
	);
}
export default IconButton;
