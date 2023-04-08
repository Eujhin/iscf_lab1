import React from "react";

const DataRefresh = () => {
    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
            DataRefresh
            <div>
                <button id="plusBtn" type="button" className="box-border h-28 w-28 bg-green-500 ">
                    +
                </button>               
                5
                <button id="minusBtn" type="button" className="box-border h-28 w-28 bg-green-500 ">
                    -
                </button>
            </div>
            
        </div>
    )
}

export default DataRefresh