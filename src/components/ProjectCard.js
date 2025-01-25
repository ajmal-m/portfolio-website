

const ProjectCard = ({ project })  => {

    return (
        <div 
            className="
                min-w-[250px] h-[350px] transition-all 
                duration-300 hover:bg-transparent flex-1 
                grayscale drop-shadow-md bg-[#101010] rounded
                flex flex-col hover:grayscale-0
                backdrop-filter backdrop-blur-lg
                group relative hover:scale-[1.04]
                shadow-lg border border-[grey]
            "
        >
            {/* Project Image */}
            <div className="">
                <img src={project?.image?.url} alt={project?.image?.alt} srcset="" className="w-full max-h-[258px] rounded-lg object-cover" />
            </div>
            {/* Project Image */}

                {/* Project name & description */}
                <div className="px-[24px] py-[16px] pb-0">
                    <div className="
                        font-bold text-lg mb-2 
                        sm:text-[12px] md:text-[13px] 
                        lg:text-[15px] text-white
                        font-popinsMedium
                    "
                    >
                        {project?.name}
                    </div>
                </div>
                {/* Project name & description */}

                <div className="overflow-y-auto px-[24px] py-[16px] pt-0 scroll-bar" style={{scrollbarWidth:0}}> 
                    <p className="text-white text-[12px] transition-all duration-300 font-popinsMedium opacity-50 group-hover:opacity-100">
                        {project?.detail}
                    </p>
                </div>


            {/* btn icons */}

            <div className="absolute top-[10px] left-[10px]">
                <div className="flex gap-[12px]">
                    <a href={project?.link?.github}  target="_blank"  
                        className="
                            bg-[#374151e6] dark:bg-[#374151e6] w-[90px] h-[37px] 
                            flex items-center flex gap-2 rounded-lg p-[8px]  
                            opacity-0 transition-all duration-300 group-hover:opacity-100
                        "
                        rel="noreferrer"

                    >
                        <img src="/images/github-brands-solid.svg" className="w-[20px] h-[20px]" alt="" srcset="" />
                        <p className="text-[12px] text-[white] font-bold font-popinsMedium opacity-80">GitHub</p>
                    </a>

                    <a href={project?.link?.view}  target="_blank"  
                        className="
                            bg-[#374151e6] dark:bg-[#374151e6] w-[90px] h-[37px] 
                            flex items-center flex gap-2 rounded-lg p-[8px]  opacity-0 
                            transition-all duration-300 group-hover:opacity-100
                        "
                        rel="noreferrer"
                    >
                        <img src="/images/eye-solid.svg" className="w-[20px] h-[20px]" alt="" srcset="" />
                        <p className="text-[12px] text-[white] font-bold font-popinsMedium opacity-80">View</p>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ProjectCard;