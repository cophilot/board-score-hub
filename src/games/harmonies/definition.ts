import leaf from './assets/leaf.png';

export default function getDefinition() {
    return {
        title: 'Harmonies',
        bgColor: '#deceac',
        fontColor: 'black',
        primaryColor: '#0094b8',
        secondaryColor: '#f7ac1f',
        playerSizes: [1, 2, 3, 4],
        winMode: 'most',
        rows: [
            {
                name: 'Leaf',
                icon: leaf,
            },
            {
                name: 'Stone',
                icon: 'src/games/harmonies/assets/stone.png',
            },
            {
                name: 'Flower',
                icon: 'src/games/harmonies/assets/flower.png',
            },
            {
                name: 'House',
                icon: 'src/games/harmonies/assets/house.png',
            },
            {
                name: 'Water',
                icon: 'src/games/harmonies/assets/water.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
            {
                name: 'Animal',
                icon: 'src/games/harmonies/assets/card.png',
            },
        ],
    };
}
