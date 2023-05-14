import './App.scss';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <div className='flex flex-col items-center space-y-4'>
        <p className="text-lg text-gray-700">This is the main content area.</p>
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">
          Click Me
        </button>
        </div>
      </main>
    </div>
  );
}
export default App;
