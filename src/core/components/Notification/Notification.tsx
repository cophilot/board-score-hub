import { useCallback, useEffect, useState } from 'react';
import './Notification.scss';

interface NotificationProps {
	message: string;
	heading?: string;
	onClose?: () => void;
	timeout?: number;
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
	timeout = 3000,
}: NotificationProps) {
	const [show, setShow] = useState(false);

	const isNotDefined = (str: string | undefined | null) =>
		[null, undefined, ''].includes(str);

	const close = useCallback(() => {
		setShow(false);
		onClose && onClose();
	}, [onClose]);

	useEffect(() => {
		if (isNotDefined(heading) && isNotDefined(message)) {
			return;
		}
		setShow(true);
		timeout && setTimeout(close, timeout);
	}, [close, heading, message, timeout]);

	if (!show) {
		return null;
	}

	return (
		<div className="notification">
			{heading && <h2>{heading}</h2>}
			<p className="text">{message}</p>
		</div>
	);
}
export default Notification;
