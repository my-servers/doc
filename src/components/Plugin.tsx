export function Plugin(plugin){
    return (
        <div class={`group relative rounded-full ml-5 mr-5 w-[80px] h-[80px] shadow-2xl  backdrop-blur-sm md:hover:scale-[1.2] 
        hover:bg-opacity-95 transition ${plugin.color} items-center justify-center flex flex-col`}>
            <div class="z-0 absolute group-hover:hidden" >
                <img class="w-[50px] h-[50px]" src={plugin.url} alt={plugin.name} />
            </div>

            <div class={`bg-gray-900 absolute z-20 h-20 w-20 rounded-full group-hover:flex hidden 
            flex flex-col items-center bg-[url('${plugin.url}')] bg-no-repeat bg-center opacity-90 justify-center`}>
                <p class="inset-0 items-center justify-center text-gray-100">{plugin.name}</p>
            </div>
        </div>
        
    )
}


