

const Skills = ()  => {
    return (
        <section className="mt-[90px] px-[16px] pb-[15px]">
            <h1 className="text-4xl pb-1 py-1 font-bold mt-5  text-white font-popinsMedium text-center">Skills</h1>
            <div className="bg-[#5255fa] rounded-lg xs:w-[250px] lg:w-96 shadow-sm  h-1 m-5 "></div>
            {/* Skill container */}
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
                {/* Proramming languge */}
                <div className="mb-8 sm:mb-12">
                    <h2 
                        className="
                            text-lg sm:text-xl font-bold mb-4 sm:mb-6 
                            text-white/90 border-b border-white/10 pb-2 
                            text-center font-popinsMedium
                        "
                    >
                        Programming Languages
                    </h2>

                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                        <div 
                            className="
                                cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                transition-all duration-700 transform 
                                opacity-100 translate-y-0 scale-100
                            "
                        >
                            <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                    <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-map-11796897-9632908.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                    </div>
                                    <div className="h-[40%] flex items-center justify-center w-full">
                                        <h3 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Javascript</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            className="
                                cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                transition-all duration-700 transform 
                                opacity-100 translate-y-0 scale-100
                            "
                        >
                            <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                    <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                    </div>
                                    <div className="h-[40%] flex items-center justify-center w-full">
                                        <h3 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Typescript</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skill container */}
        </section>
    )
}

export default Skills;