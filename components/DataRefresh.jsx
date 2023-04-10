const DataRefresh = ( {intervalTime, setIntervalTime} ) => {

    const incFunc = () => {
        setIntervalTime(intervalTime + 1)
    };
    const decFunc = () => {
        if (intervalTime > 0){
            setIntervalTime(intervalTime - 1)
        }
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
