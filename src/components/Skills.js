
import AnimatedText from "./AnimatedText";
import Navbar from "./Navbar";
const Skills = ()  => {
    return (

        <div  
            className="
                bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
                bg-blue-shadow flex justify-center
                custom-scrollbar scroll-smooth
            "
        >

            <div className="max-w-[700px]">
                <Navbar/>
                <section className="mt-[90px] px-[16px] pb-[15px]">
                    <AnimatedText>
                        <h1 className="text-4xl pb-1 py-1 font-bold mt-5  text-white font-popinsMedium text-center">Skills</h1>
                    </AnimatedText>
                    <AnimatedText>
                        <div className="bg-[#5255fa] rounded-lg xs:w-[250px] shadow-sm  h-1 m-5 "></div>
                    </AnimatedText>
                    {/* Skill container */}
                    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
                        {/* Proramming languge */}
                        <div className="mb-8 sm:mb-12">
                            <AnimatedText>
                                <h2 
                                    className="
                                        text-lg sm:text-xl font-bold mb-4 sm:mb-6 
                                        text-white/90 border-b border-white/10 pb-2 
                                        text-center font-popinsMedium
                                    "
                                >
                                    Programming Languages
                                </h2>
                            </AnimatedText>

                            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                <AnimatedText>
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
                                </AnimatedText>

                                <AnimatedText>
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
                                </AnimatedText>


                                <AnimatedText>
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
                                                <img src="/images/icons8-python-48.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>
                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h3 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Python</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>
                            </div>
                        </div>
                        {/* Programming language */}


                        {/* Front end skilss */}
                        <div className="mb-8 sm:mb-12">
                            <AnimatedText>
                            <h1 
                                className="
                                    text-lg sm:text-xl font-bold mb-4 
                                    sm:mb-6 text-white/90 border-b 
                                    border-white/10 pb-2 text-center
                                    font-popinsMedium
                                "
                            >
                                Frontend Development
                            </h1>
                            </AnimatedText>

                            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/source-page-2824393-2343855.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">HTML/CSS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>

                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">React Js</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>




                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="/images/icons8-vue-js-48.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Vue Js</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>



                                <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="/images/svelte-icon.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">SvelteKit</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="/images/Tailwind CSS.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">TailwindCSS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>

                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bootstrap-9305875-7694074.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Bootstarp</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                            </div>
                        </div>
                        {/* Front end skills */}


                        {/* Backe end dev */}
                        <div className="mb-8 sm:mb-12">
                            <AnimatedText>
                            <h1 
                                className="
                                    text-lg sm:text-xl font-bold mb-4 
                                    sm:mb-6 text-white/90 border-b 
                                    border-white/10 pb-2 text-center
                                    font-popinsMedium
                                "
                            >
                                Backend & Databases
                            </h1>
                            </AnimatedText>

                            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-3550841-2970426.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Node js</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>

                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="/images/express.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Express Js</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>




                                <AnimatedText>
                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-3629612-3032310.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">MongoDB</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>



                                <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-3629583-3032281.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">PostgreSQL</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                                 <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Socket.io</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                                 <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">git</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>

                                  <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">JWT</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                                  <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=256" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">AWS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>

                                
                                  <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Razorpay</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                                  <AnimatedText>

                                <div 
                                    className="
                                        cursor-pointer w-[110px] sm:w-[125px] md:w-[140px] p-1 sm:p-2
                                        transition-all duration-700 transform 
                                        opacity-100 translate-y-0 scale-100
                                    " 
                                >

                                    <div className="group relative bg-black/20 flex flex-col h-24 sm:h-28 md:h-32 backdrop-blur-lg rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                                        <div className="relative flex flex-col items-center justify-between w-full h-full p-2 sm:p-3">
                                            <div className="flex items-center justify-center h-[60%] w-full overflow-hidden">
                                                <img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" className="w-auto h-full max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-110" alt="" srcset="" />
                                            </div>

                                            <div className="h-[40%] flex items-center justify-center w-full">
                                                <h2 className="font-bold text-center text-xs sm:text-sm text-white/90 transition-all duration-300 group-hover:text-white font-popinsMedium">Vercel</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimatedText>


                

            


                            </div>
                        </div>
                        {/* Back end dev */}
                    </div>
                    {/* Skill container */}
                </section> 
            </div>  
        </div>
    )
}

export default Skills;