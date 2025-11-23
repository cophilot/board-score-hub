import logoPic from '../assets/logo.png';
import logoPicWhite from '../assets/logo-white.png';
import { useIsDarkModeEnabled } from '../providers/ThemeProvider';
import ColorUtils from '../core/utils/ColorUtils';

interface LogoProps {
	size?: number;
	bgColor?: string;
	detectDarkMode?: boolean;
	style?: React.CSSProperties;
}
/**
 * This is a Logo component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-22
 */
function Logo({
	size = 200,
	bgColor = '#fff',
	detectDarkMode = false,
	style = {},
}: LogoProps) {
	const isDarkModeEnabled = useIsDarkModeEnabled();
	if (detectDarkMode) {
		bgColor = isDarkModeEnabled() ? '#000' : '#fff';
	}

	let icon = logoPic;
	if (ColorUtils.isDarkColor(bgColor)) {
		icon = logoPicWhite;
	}
	const imgStyle = {
		width: size,
		height: size,
		marginTop: 20,
	};
	return (
		<div className="logo" style={style}>
			<img src={icon} alt="BoardGameHub" style={imgStyle} />
		</div>
	);
}
export default Logo;
