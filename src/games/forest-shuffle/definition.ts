import { WinMode } from '../../api/types/WinMode';
import cardIcon from './assets/card.png';
import topIcon from './assets/top.png';
import downIcon from './assets/down.png';
import leftIcon from './assets/left.png';
import rightIcon from './assets/right.png';
import caveIcon from './assets/cave.png';
export default function getDefinition() {
    return {
        title: 'Forest Shuffle',
        bgColor: '#dce2c9',
        fontColor: '#315a39',
        primaryColor: '#bbad86',
        secondaryColor: '#b11917',
        playerSizes: [2, 3, 4, 5],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Tree',
                icon: cardIcon,
            },
            {
                name: 'Cards on top',
                icon: topIcon,
            },
            {
                name: 'Cards on right',
                icon: rightIcon,
            },
            {
                name: 'Cards below',
                icon: downIcon,
            },
            {
                name: 'Cards on left',
                icon: leftIcon,
            },
            {
                name: 'Cave',
                icon: caveIcon,
            },
        ],
    };
}
