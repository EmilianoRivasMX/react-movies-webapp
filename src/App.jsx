import './App.css';
import MoviesGrid from './MoviesGrid';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Movies 🍿</h1>
      </header>
      <main>
        <MoviesGrid /> 
      </main>
    </div>
  );
}

export default App;
