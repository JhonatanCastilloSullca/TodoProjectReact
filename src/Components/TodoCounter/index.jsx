function TodoCounter({total, completed}){
    return(
        <h1 className='text-xl p-[45px] font-semibold text-center text-blue-600/70'>Has Completado <b> {completed} </b> de <b> {total} </b>ToDos</h1>
    );
}

export {TodoCounter};