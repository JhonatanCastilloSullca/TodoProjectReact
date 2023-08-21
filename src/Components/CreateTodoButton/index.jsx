function CreateTodoButton(){
    return(
        <button className="bg-blue-600 shadow-[0_5px_25px_0px_rgba(97,218,250,0.5)] 
                border-none 
                rounded-full
                text-7xl
                fixed
                bottom-6
                right-6
                font-bold
                text-[#fafafa]
                flex
                justify-center
                items-end
                h-14
                w-14
                origin-center
                rotate-0
                transition
                duration-150
                hover:origin-center
                hover:rotate-180
                ">
            +
        </button>
    );
}

export {CreateTodoButton};