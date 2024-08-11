

function Box({ vari, onSquareClick }) {
  return (
    <button 
      onClick={onSquareClick} 
      className="w-24 h-24 border-2 text-white text-2xl font-bold hover:bg-indigo-700 focus:outline-none"
    >
      {vari}
    </button>
  );
}

export default Box;
