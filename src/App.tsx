import './App.scss';
import BoardScorePage from './components/BoardScorePage/BoardScorePage';

function App() {
    return (
        <>
            <BoardScorePage
                definition={{
                    bgColor: 'blue',
                    title: 'Harmonies',
                    fontColor: 'red',
                }}
            />
        </>
    );
}

export default App;
