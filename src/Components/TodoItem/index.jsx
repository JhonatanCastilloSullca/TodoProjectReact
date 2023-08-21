function TodoItem(props){
    return(
        <div className='relative my-5 px-4 py-5 flex max-w-sm rounded bg-blue-600/10 shadow-lg'>
            <a href='#' 
                className={`mx-5 w-6 h-6 bg-gray-600 
                rounded-full text-center text-white transition-all 
                duration-500 transform hover:bg-green-700 
                hover:scale-110 hover:shadow-[0_0_10px_1px_rgba(34,197,94,0.3)]
                Icon-check
                ${props.completed && "Icon-check--active"}`}>
                V
            </a>
            <p className={`
                mx-5
                text-lg
                font-medium
                text-blue-600/70
                TodoItem-p
                ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
                </p>
            <a
                href='#'
                className='absolute -top-3 right-0 mx-5 w-6 h-6 bg-red-600 
                rounded-full text-center text-white transition-all 
                duration-500 transform hover:bg-red-700 
                hover:scale-110 hover:shadow-[0_0_10px_1px_rgba(239,68,68,0.3)]
                Icon-delete
                '>
                V
            </a>
        
        </div>

        
        
    );
}

export {TodoItem};