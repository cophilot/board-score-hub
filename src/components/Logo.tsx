import logoPic from '../assets/logo.png';
import logoPicWhite from '../assets/logo-white.png';
import ColorUtils from '../utils/ColorUtils';

interface LogoProps {
    size?: number;
    bgColor?: string;
}
/**
 * This is a Logo component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-22
 */
function Logo({ size = 200, bgColor = '#fff' }: LogoProps) {
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
