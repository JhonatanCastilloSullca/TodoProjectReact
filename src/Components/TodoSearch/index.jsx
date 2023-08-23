import React from "react";
function TodoSearch({searchValue,setSearchValue,})
{  
    return(
        <input className='mb-4 block w-full bg-white border-2 
        py-4 px-3 
        shadow
        appearance-none 
        border rounded 
        w-full 
        py-2 px-3 
        text-gray-700 
        font-medium
        text-lg
        text-center
        leading-tight 
        rounded-lg 
        border-blue-600/70
        focus:outline-none focus:border-border-blue-600/100 focus:ring
        shadow-lg shadow-blue-600/50 
        ' placeholder="Las compras del dia"
        value={searchValue}
        
        onChange={
            (event)=>{
                setSearchValue(event.target.value);
            }
        }
        />
    );
}

export {TodoSearch};