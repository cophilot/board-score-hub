import basicEvents from './assets/basic-events.png';
import journey from './assets/journey.png';
import pointToken from './assets/point-token.png';
import specialEvents from './assets/special-events.png';
import village from './assets/village.png';
import prosperity from './assets/prosperity.png';
import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';

export default function getDefinition() {
    return {
        title: 'Everdell',
        bgColor: '#5c652e',
        fontColor: '#342a28',
        primaryColor: '#714839',
        secondaryColor: '#50446a',
        fontFamily: FontUtils.HANDWRITING,
        playerSizes: [1, 2, 3, 4],
        winMode: WinMode.MOST,
        stripColor: '#4b5729',
        rows: [
            {
                name: 'Cards in Village',
                icon: village,
            },
            {
                name: 'Prosperity',
                icon: prosperity,
            },
            {
                name: 'Point Tokens',
                icon: pointToken,
            },
            {
                name: 'Basic Events',
                icon: basicEvents,
            },
            {
                name: 'Special Events',
                icon: specialEvents,
            },
            {
                name: 'Journey',
                icon: journey,
            },
        ],
    };
}
