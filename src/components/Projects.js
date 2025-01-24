import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";

const Projects = ()  => {
    return (
        <div 
            className="
                bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
                bg-blue-shadow flex justify-center
                custom-scrollbar
            "
        >
            <div className="max-w-[700px]">
                <Navbar/>
                <section className="mt-[90px] px-[16px] pb-[15px]">
                    <div>
                        <AnimatedText>
                            <h1 className="text-4xl pb-1 py-1 font-bold text-white text-center mt-4 font-popinsMedium">Projects</h1>
                            <div className="h-1 bg-[#5255fa] w-7/12 mx-auto mt-5 rounded-lg"></div>
                        </AnimatedText>
                    </div>

                    <div className="flex flex-wrap justify-center xs:m-2 sm:m-6 lg:w-[80%] lg:space-x-1">
                        <div 
                            className="
                                xs:w-70 md:w-1/3 md:font-[20px] slmd:w-[300px] sm:w-1/2 lg:w-1/5 p-2 mt-6 cursor-pointer flex items-center justify-center gap-2 
                                transition-all duration-700 transform
                                opacity-100 translate-y-0 scale-100
                            "
                        >
                            <div 
                                className="
                                    min-w-[250px] min-h-[400px]  hover:bg-opacity-10 hover:bg-gray-900 saturate-0 
                                    hover:saturate-100 backdrop-filter backdrop-blur-lg rounded-md overflow-hidden 
                                    shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                                "
                            >
                                <div className="relative p-1 flex flex-col items-center">
                                    <div className="relative shadow-black/5 shadow-none rounded-large">
                                        <div className="relative overflow-hidden rounded-inherit rounded-large">
                                           <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="100%" className="relative z-10 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 w-full h-[240px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 px-6 py-4 transform transition-transform duration-300">
                                    <div className="font-bold text-lg mb-2 sm:text-[12px] md:text-[13px] lg:text-[15px] text-white">
                                    Booking App
                                    </div>

                                    <div className="text-white overflow-hidden">
                                        <p className="text-white text-base sm:text-[12px]">
                                        A web application that enables remote workers to book seats in shared workspaces easily. Users can browse available locations, select preferred amenities, and manage their bookings through a user-friendly interface. The platform features secure user authentication, membership plans for discounts, and seamless payment integration with Stripe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;