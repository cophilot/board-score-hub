import tree from './assets/tree.png';
import field from './assets/field.png';
import house from './assets/house.png';
import rail from './assets/rail.png';
import river from './assets/river.png';
import border from './assets/border.png';
import six from './assets/six.png';
import flagGreen from './assets/flag-green.png';
import flagYellow from './assets/flag-yellow.png';
import flagRed from './assets/flag-red.png';
import longRail from './assets/longest-rail.png';
import longRiver from './assets/longest-river.png';
import { WinMode } from '../../api/types/WinMode';

export default function getDefinition() {
    return {
        title: 'Dorfromatik: Duel',
        //bgColor: '#859395',
        //fontColor: 'white',
        primaryColor: '#7ba1d4',
        secondaryColor: '#ee776c',
        playerSizes: [2],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Tree',
                icon: tree,
            },
            {
                name: 'Field',
                icon: field,
            },
            {
                name: 'House',
                icon: house,
            },
            {
                name: 'Railway',
                icon: rail,
            },
            {
                name: 'River',
                icon: river,
            },
            {
                name: 'Border',
                icon: border,
            },
            {
                name: 'Six',
                icon: six,
            },
            {
                name: 'Flag green',
                icon: flagGreen,
            },
            {
                name: 'Flag yellow',
                icon: flagYellow,
            },
            {
                name: 'Flag red',
                icon: flagRed,
            },
            {
                name: 'Longest Railway',
                icon: longRail,
            },
            {
                name: 'Longest River',
                icon: longRiver,
            },
        ],
    };
}
