import React, { ReactNode, useEffect } from 'react';
import StyleUtils from '../api/utils/StyleUtils';

const ThemeContext = React.createContext({
    isDarkModeEnabled: (): boolean => {
        return false;
    },
    toggleTheme: () => {},
});

/**
 * This is the useIsDarkModeEnabled hook
 * @returns {function} isDarkModeEnabled
 */
export function useIsDarkModeEnabled() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error(
            'useIsDarkModeEnabled must be used within a ThemeProvider'
        );
    }
    return context.isDarkModeEnabled;
}
/**
 * This is the useToggleTheme hook
 * @returns {function} toggleTheme
 */
export function useToggleTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useToggleTheme must be used within a ThemeProvider');
    }
    return context.toggleTheme;
}

interface Props {
    children: ReactNode;
}

/**
 * This is the ThemeProvider
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-10
 */
export function ThemeProvider({ children }: Props) {
    const localStorageKey = 'bsh-is-dark-mode';

    const detectInitialTheme = () => {
        const storedIsDarkMode = localStorage.getItem(localStorageKey);
        if (storedIsDarkMode) {
            return storedIsDarkMode === 'true';
        }
        return isDarkModePreferred();
    };

    const [isDarkMode, setIsDarkMode] = React.useState(detectInitialTheme());

    useEffect(() => {
        StyleUtils.setDefaultValues(isDarkMode);
    }, []);

    const isDarkModeEnabled = () => {
        return isDarkMode;
    };

    const toggleTheme = () => {
        const newIsDarkMode = !isDarkMode;
        StyleUtils.setDefaultValues(newIsDarkMode);
        setIsDarkMode(newIsDarkMode);
        localStorage.setItem(localStorageKey, newIsDarkMode.toString());
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkModeEnabled,
                toggleTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
}

function isDarkModePreferred() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
