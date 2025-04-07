import { useCallback, useEffect, useState } from 'react';
import './Notification.scss';

interface NotificationProps {
	message: string;
	heading?: string;
	onClose?: () => void;
	onClick?: () => void;
	timeout?: number;
	level?: 'info' | 'warning' | 'error';
}

/**
 * This is a Notification component
 * @author cophilot
 * @version 1.0.0
 * @created 2025-4-1
 */
function Notification({
	heading,
	message,
	onClose,
	onClick = () => {},
	timeout = 5000,
	level = 'info',
}: NotificationProps) {
	const [show, setShow] = useState(false);
	const [cls, setCls] = useState('');

	const isNotDefined = (str: string | undefined | null) =>
		[null, undefined, ''].includes(str);

	const close = useCallback(() => {
		setCls('closing');
		setTimeout(() => {
			setShow(false);
			onClose && onClose();
		}, 500);
	}, [onClose]);

	const getLevelClass = () => {
		switch (level) {
			case 'warning':
				return 'bi-exclamation-octagon';
			case 'error':
				return 'bi-exclamation-triangle';
			default:
				return 'bi-info-circle';
		}
	};

	useEffect(() => {
		if (isNotDefined(heading) && isNotDefined(message)) {
			return;
		}
		setShow(true);
		if (!timeout || timeout === -1) {
			return;
		}

		setTimeout(close, timeout);
	}, [close, heading, message, timeout]);

	if (!show) {
		return null;
	}

	return (
		<div className={'notification ' + cls} onClick={onClick}>
			<div className="hor">
				<i className={'bi level mr ' + getLevelClass()}></i>
				<div className="ver-start">
					{heading && <h2>{heading}</h2>}
					<p className="text">{message}</p>
				</div>
			</div>
		</div>
	);
}
export default Notification;
