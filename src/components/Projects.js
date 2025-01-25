import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";
import ProjectCard from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";

const Projects = ()  => {
    return (
        <div 
            className="
                bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
                bg-blue-shadow flex justify-center
                custom-scrollbar scroll-smooth
            "
        >
            <div className="max-w-[1200px]">
                <Navbar/>
                <section className="mt-[90px] px-[16px] pb-[15px]">
                    <div>
                        <AnimatedText>
                            <h1 className="text-4xl pb-1 py-1 font-bold text-white text-center mt-4 font-popinsMedium">Projects</h1>
                            <div className="h-1 bg-[#5255fa] w-7/12 mx-auto mt-5 rounded-lg"></div>
                        </AnimatedText>
                    </div>

                    <div className="flex flex-wrap gap-[16px] p-[24px]">
                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>

                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>


                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>



                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>
                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>
                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>
                        <AnimatedCard>
                            <ProjectCard/>
                        </AnimatedCard>

                        


                        



                    </div>                  
                </section>
            </div>
        </div>
    )
}

export default Projects;