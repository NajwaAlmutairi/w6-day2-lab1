import { useState } from 'react';
import './App.css';

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const images = [
    'https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_1033124-10.jpg',
    'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VuJfZepsmghuglByBpsb1rFIkgSeSK6nqA&s',
    'https://www.thespruce.com/thmb/ecrgEMOycT4gr7AUKEzNX6ei3eY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-08-a1a49bfdcc4e45cabe312cc1f692ceb3.JPG',
    'https://www.southernliving.com/thmb/IOSJaeuhuv-rW8CtjYkcBM1rIuc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-200553646-001-2000-922bf087a85b4a309abc0c53c3f46d0e.jpg',
  ];

  const [image, setImage] = useState(images[0]);
  const [index, setIndex] = useState(0);


  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`rounded-lg p-6 w-full max-w-xs ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 p-2 rounded bg-gray-500 text-white"
        >
          Click For {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <div className="mb-6">
          <h2 className={`text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
            The First Number: {numberOne}
          </h2>
          <div className="flex justify-around mt-2">
            <button onClick={() => setNumberOne(numberOne + 1)} className="btn bg-red-300">+</button>
            <button onClick={() => setNumberOne(numberOne - 1)} className="btn bg-red-300">-</button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className={`text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
            The Second Number: {numberTwo}
          </h2>
          <div className="flex justify-around mt-2">
            <button onClick={() => setNumberTwo(numberTwo + 1)} className="btn bg-red-300">+</button>
            <button onClick={() => setNumberTwo(numberTwo - 1)} className="btn bg-red-300">-</button>
          </div>
        </div>

        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
          Result: {result}
        </h2>

        <h3 className="text-xl">Operations:</h3>
        <div className="flex justify-around mb-4">
          <button onClick={() => setResult(numberOne + numberTwo)} className="btn bg-red-300">+</button>
          <button onClick={() => setResult(numberOne - numberTwo)} className="btn bg-red-300">-</button>
          <button onClick={() => setResult(numberOne * numberTwo)} className="btn bg-red-300">*</button>
          <button onClick={() => setResult(numberOne % numberTwo)} className="btn bg-red-300">%</button>
        </div>
      </div>

      <div className={`mt-3 flex flex-col items-center gap-2 p-1 border-2 rounded-lg shadow-md ${darkMode ? 'border-white' : 'border-black'}`}>
        <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-md">
          <img src={image} alt="Random" className="w-full h-auto object-cover" />
        </div>
        <button onClick={() => {
          if (index < images.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
          setImage(images[index]);
        }} className="btn bg-red-300 w-full max-sm:text-xs max-sm:p-1">
          Change Photo
        </button>
      </div>
    </div>
  );
}

export default App;
