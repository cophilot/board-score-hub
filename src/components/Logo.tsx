import logoPic from '../assets/logo.png';
import logoPicWhite from '../assets/logo-white.png';
import ColorUtils from '../utils/ColorUtils';
import { useIsDarkModeEnabled } from '../providers/ThemeProvider';

interface LogoProps {
    size?: number;
    bgColor?: string;
    detectDarkMode?: boolean;
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
}: LogoProps) {
    const isDarkModeEnabled = useIsDarkModeEnabled();
    if (detectDarkMode) {
        bgColor = isDarkModeEnabled() ? '#000' : '#fff';
    }

    let icon = logoPic;
    if (ColorUtils.isDarkColor(bgColor)) {
        icon = logoPicWhite;
    }
    const style = {
        width: size,
        height: size,
        marginTop: 20,
    };
    return (
        <div className="logo">
            <img src={icon} alt="BoardGameHub" style={style} />
        </div>
    );
}
export default Logo;
