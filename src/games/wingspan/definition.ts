import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import eggIcon from './assets/eggs.png';
import resourceIcon from './assets/resources.png';
import roundGoalIcon from './assets/round-goals.png';
import bonusIcon from './assets/bonus.png';
import tuckedCardIcon from './assets/tucked-card.png';
import birdIcon from './assets/bird.png';

export default function getDefinition() {
    return {
        title: 'Wingspan',
        bgColor: '#f4f5f0',
        fontColor: '#73645b',
        primaryColor: '#9fcccf',
        secondaryColor: '#73645b', //73645b
        playerSizes: [1, 2, 3, 4, 5],
        fontFamily: FontUtils.PLAYFUL,
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Birds',
                icon: birdIcon,
            },
            {
                name: 'Bonus cards',
                icon: bonusIcon,
            },
            {
                name: 'End-of-round goals',
                icon: roundGoalIcon,
            },
            {
                name: 'Eggs on cards',
                icon: eggIcon,
            },
            {
                name: 'Food on cards',
                icon: resourceIcon,
            },
            {
                name: 'Tucked cards',
                icon: tuckedCardIcon,
            },
        ],
    };
}
