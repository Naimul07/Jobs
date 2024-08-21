import Box from "./Box"
import { useState,useEffect } from "react"
import { toast } from "react-toastify";
function Tictac() {
    const [boxvalue, setBoxvalue] = useState(Array(9).fill(null));
    const [next, setNext] = useState(false);
    const winner = calculateWinner(boxvalue);

    useEffect(() => {
        if (winner) {
            toast.success("Winner: " + winner);
        }
    }, [winner]); 

    function handleClick(i) {
        if (boxvalue[i]||calculateWinner(boxvalue))
            return;
        const nexSquares = boxvalue.slice();
        if (next)
            nexSquares[i] = 'X';
        else
            nexSquares[i] = 'O';
        setNext(!next);
        setBoxvalue(nexSquares);

    }
    let status;
    if (winner) {    
        status = "Winner: " + winner;
       
    } else {
        status = "Next player: " + (next ? "X" : "O");
    }
    return (
        <>
            <div className="grid grid-cols-3">
                {boxvalue.map((value, i) => (
                    <Box vari={value} onSquareClick={() => handleClick(i)} />
                ))}
            </div>
            <div className="text-red-600 font-semibold">
                {status}
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;

}

export default Tictac