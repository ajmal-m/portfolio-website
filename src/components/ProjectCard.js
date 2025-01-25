

const ProjectCard = ()  => {

    return (
        <div 
            className="
                min-w-[250px] h-[400px] transition-all 
                duration-300 hover:bg-transparent flex-1 
                grayscale drop-shadow-md bg-[#101010] rounded
                flex flex-col hover:grayscale-0
            "
        >
            <div className="flex-1">
                <img src="/images/foodOrderApp.png" alt="" srcset="" className="mmax-w-full h-[200px] rounded" />
            </div>
        </div>
    )
}

export default ProjectCard;