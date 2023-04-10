const Alarms = ( { xValues, yValues, zValues } ) => {

    const [maxValue, setMaxValue] = useState();
    const [minValue, setMinValue] = useState();

    const setMaxFunc = () => {
        setMaxValue(max)
    };
    const setMinFunc = () => {
        setMinValue(min)
    };

    if(xValues || maxValue){
        if(
            xValues.some(el => el > maxValue) ||
            yValues.some(el => el > maxValue) ||
            zValues.some(el => el > maxValue)
            ){

            }
    }

    if(xValues || minValue){
        if(
            xValues.some(el => el < minValue) ||
            yValues.some(el => el < minValue) ||
            zValues.some(el => el < minValue)
            ){

            }
    }
    

    return (
        <div className="w-full col-span-1 relative lg:h-[30vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
            <div className="grid place-content-center text-lg">valores para monitorização</div>
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

export default Alarms
