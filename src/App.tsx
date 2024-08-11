import './App.scss';
import CookieMessage from './components/CookieMessage/CookieMessage';
import { ThemeProvider } from './providers/ThemeProvider';
import Routes from './Routes';

function App() {
    return (
        <ThemeProvider>
            <CookieMessage />
            <Routes />
        </ThemeProvider>
    );
}

export default App;
