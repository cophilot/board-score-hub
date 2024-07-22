import { WinMode } from '../../api/types/WinMode';
import moodIcon from './assets/mood.png';
import experienceIcon from './assets/experience.png';
import researchTokenIcon from './assets/research-tokens.png';
import trainsIcon from './assets/trains.png';

export default function getDefinition() {
    return {
        title: "Let's Go! To Japan",
        bgColor: '#f6f8f9',
        fontColor: '#000',
        primaryColor: '#59c4db',
        secondaryColor: '#eca0bc',
        playerSizes: [1, 2, 3, 4, 5],
        winMode: WinMode.MOST,
        rows: [
            {
                name: 'Monday',
            },
            {
                name: 'Tuesday',
            },
            {
                name: 'Wednesday',
            },
            {
                name: 'Thursday',
            },
            {
                name: 'Friday',
            },
            {
                name: 'Saturday',
            },
            {
                name: 'Stress / Happiness Trackers',
                icon: moodIcon,
            },
            {
                name: 'Experience',
                icon: experienceIcon,
            },
            {
                name: 'Trains',
                icon: trainsIcon,
            },
            {
                name: 'Research Tokens',
                icon: researchTokenIcon,
            },
        ],
    };
}
