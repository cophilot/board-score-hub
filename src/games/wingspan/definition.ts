import { WinMode } from '../../api/types/WinMode';

export default function getDefinition() {
    return {
        title: 'Wingspan',
        //bgColor: '#fff',
        //fontColor: '#000',
        //primaryColor: '#fff',
        //secondaryColor: '#000',
        playerSizes: [1, 2, 3, 4],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Row1',
            },

            {
                name: 'Row2',
                icon: 'src/games/wingspan/assets/test.png',
            },
        ],
    };
}
