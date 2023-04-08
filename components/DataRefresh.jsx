import React, { useState } from "react";

const DataRefresh = () => {

    const [intervalTime, setCount] = useState(0);

    const incFunc = () => {
        setCount(intervalTime + 1)
    };
    const decFunc = () => {
        setCount(intervalTime - 1)
    };

    return (
        <div className="w-full col-span-1 relative lg:h-[30vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
            <div className="grid place-content-center text-lg">Intervalo de atualização</div>
            <div className="flex items-center justify-center">
                <button id="minusBtn" onClick={decFunc} className="box-border p-4 m-4 bg-green-500 border-green-900 border-b rounded hover:bg-green-800">
                    -
                </button>
                {intervalTime}
                <button id="plusBtn" onClick={incFunc} className="box-border p-4 m-4 bg-green-500 border-green-900 border-b rounded hover:bg-green-800">
                    +
                </button>               
            </div>
            
        </div>
    )
}

export default DataRefresh