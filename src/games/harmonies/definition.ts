import leaf from './assets/leaf.png';
import stone from './assets/stone.png';
import flower from './assets/flower.png';
import house from './assets/house.png';
import water from './assets/water.png';
import card from './assets/card.png';

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
                icon: stone,
            },
            {
                name: 'Flower',
                icon: flower,
            },
            {
                name: 'House',
                icon: house,
            },
            {
                name: 'Water',
                icon: water,
            },
            {
                name: 'Animal',
                icon: card,
            },
            {
                name: 'Animal',
                icon: card,
            },
            {
                name: 'Animal',
                icon: card,
            },
            {
                name: 'Animal',
                icon: card,
            },
            {
                name: 'Animal',
                icon: card,
            },
            {
                name: 'Animal',
                icon: card,
            },
        ],
    };
}
