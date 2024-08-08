import { WinMode } from '../../api/types/WinMode';
import FontUtils from '../../api/utils/FontUtils';
import blockedBuilding from './assets/blocked-building.png';
import loan from './assets/loan.png';
import resources from './assets/resources.png';
import stone from './assets/stone.png';
import vp from './assets/vp.png';
import wonders from './assets/wonders.png';

export default function getDefinition() {
    return {
        title: 'World Wonders',
        bgColor: '#e8e0dd',
        fontColor: '#6c5f56',
        primaryColor: '#b39d90',
        secondaryColor: '#ffec33',
        fontFamily: FontUtils.ANCIENT,
        stripColor: '#cfbeb0',
        playerSizes: [1, 2, 3, 4, 5],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Population',
                icon: vp,
            },
            {
                name: 'Least Produced Resource',
                icon: resources,
            },
            {
                name: 'Monuments',
                icon: wonders,
            },
            {
                name: 'Natural Resources',
                icon: stone,
            },
            {
                name: 'City Districts',
                icon: blockedBuilding,
            },
            {
                name: 'Loans',
                icon: loan,
                negative: true,
                description: 'Players lose 2 VP if they have an unpaid loan',
            },
        ],
    };
}
