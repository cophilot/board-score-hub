export default class GameStorage {
    static getStorageKeyFromTitle(gameTitle: string, subKey: string = '') {
        let key = gameTitle.toLowerCase() + '-storage';
        if (subKey !== '') {
            key += '-' + subKey.toLowerCase();
        }
        return key;
    }

    static deleteStorage(gameTitle: string) {
        // get all keys
        const keys = Object.keys(localStorage);
        // filter keys that match the game title
        const gameKeys = keys.filter((key) =>
            key.includes(gameTitle.toLowerCase())
        );
        // delete all keys
        gameKeys.forEach((key) => localStorage.removeItem(key));
    }

    static getPlayerNames(gameTitle: string, fallback: string[] = []) {
        const playerNames = localStorage.getItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'player-names')
        );
        if (playerNames === null) {
            return fallback;
        }
        return JSON.parse(playerNames);
    }

    static setPlayerNames(gameTitle: string, playerNames: string[]) {
        localStorage.setItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'player-names'),
            JSON.stringify(playerNames)
        );
    }

    static getPlayerSize(gameTitle: string, fallback: number = 2) {
        const playerSize = localStorage.getItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'player-size')
        );
        if (playerSize === null) {
            return fallback;
        }
        return parseInt(playerSize);
    }

    static setPlayerSize(gameTitle: string, playerSize: number) {
        localStorage.setItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'player-size'),
            playerSize.toString()
        );
    }

    static getSelectedExtension(gameTitle: string, fallback: string[] = []) {
        const selectedExtension = localStorage.getItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'selected-extension')
        );
        if (selectedExtension === null) {
            return fallback;
        }
        return JSON.parse(selectedExtension);
    }

    static setSelectedExtension(
        gameTitle: string,
        selectedExtension: string[]
    ) {
        localStorage.setItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'selected-extension'),
            JSON.stringify(selectedExtension)
        );
    }

    static getGameMatrix(gameTitle: string, fallback: number[][] = []) {
        const matrix = localStorage.getItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'matrix')
        );
        if (matrix === null) {
            return fallback;
        }
        return JSON.parse(matrix);
    }

    static setGameMatrix(gameTitle: string, matrix: number[][]) {
        localStorage.setItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'matrix'),
            JSON.stringify(matrix)
        );
    }

    static setGameSettings(gameTitle: string, settings: unknown) {
        localStorage.setItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'settings'),
            JSON.stringify(settings)
        );
    }

    static getGameSettings(gameTitle: string, fallback: unknown = {}) {
        const settings = localStorage.getItem(
            GameStorage.getStorageKeyFromTitle(gameTitle, 'settings')
        );
        if (settings === null) {
            return fallback;
        }
        return JSON.parse(settings);
    }
}
