

const ProjectCard = ()  => {

    return (
        <div 
            className="
                min-w-[250px] h-[400px] transition-all 
                duration-300 hover:bg-transparent flex-1 
                grayscale drop-shadow-md bg-[#101010] rounded
                flex flex-col hover:grayscale-0
                backdrop-filter backdrop-blur-lg
                group relative
            "
        >
            {/* Project Image */}
            <div className="flex-1">
                <img src="/images/foodOrderApp.png" alt="" srcset="" className="max-w-full h-[200px] rounded-lg object-cover" />
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
                    Image analysis AI
                </div>
            </div>
            {/* Project name & description */}

            <div className="overflow-y-auto px-[24px] py-[16px] pt-0 scroll-bar" style={{scrollbarWidth:0}}> 
                <p className="text-white text-base sm:text-[12px] transition-all duration-300 font-popinsMedium opacity-50 group-hover:opacity-100">In hac habitasse platea dictumst. Ut vestibulum justo ac pellentesque semper. In a cursus sapien. Cras venenatis laoreet ex, ac accumsan ante. Suspendisse purus arcu, aliquam vel commodo ac, condimentum eget ligula. Vestibulum vel neque eu orci dictum fermentum. Praesent tincidunt sed orci eu egestas. Vestibulum tempor, lorem et finibus vulputate, nunc tortor suscipit lorem, a dictum lectus nunc vel purus. Suspendisse dictum odio id libero hendrerit, at imperdiet augue molestie. Vestibulum vehicula libero nisl, quis suscipit lorem faucibus vel. </p>
            </div>


            {/* btn icons */}

            <div className="absolute top-[10px] left-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex gap-[12px]">
                    <a href=""  className="bg-[#374151e6] dark:bg-[#374151e6] w-[90px] h-[37px] flex items-center flex gap-2 rounded-lg p-[8px]">
                        <img src="/images/github-brands-solid.svg" className="w-[20px] h-[20px]" alt="" srcset="" />
                        <p className="text-[12px] text-[white] font-bold font-popinsMedium opacity-80">GitHub</p>
                    </a>

                    <a href=""  className="bg-[#374151e6] dark:bg-[#374151e6] w-[90px] h-[37px] flex items-center flex gap-2 rounded-lg p-[8px]">
                        <img src="/images/eye-solid.svg" className="w-[20px] h-[20px]" alt="" srcset="" />
                        <p className="text-[12px] text-[white] font-bold font-popinsMedium opacity-80">View</p>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default ProjectCard;