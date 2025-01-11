
const Navbar = () => {


    let navItems = [
        {
            name:"Home",
            id:'home'
        },
        {
            name:"Skills",
            id:'skills'
        },
        {
            name:"Projects",
            id:'projects'
        },
        {
            name:"Contact",
            id:'contact'
        }
    ]


    return (
        <nav className="flex items-center justify-center  mt-[24px] fixed left-0 right-0">
            <div 
                className="
                   px-[16px] max-w-[600px] min-w-[600px] 
                   min-h-[56px] rounded-[1rem] bg-[black] items-center 
                   flex justify-between backdrop-blur-sm bg-opacity-40
                   b600:min-w-[400px]
                "
            >
                {
                    navItems && navItems.map((item, index) => (
                        <div  
                            key={index} 
                            className="
                                flex p-[4px] rounded-[0.5rem]
                            "
                        >
                            <a 
                                href={`/${item?.id}`} 
                                className="
                                    transition-all duration-300 ease-in-out
                                    text-[white] font-[600] text-[12px] font-popinsMedium
                                    px-[12px] py-[6px] bg-blue-btn 
                                    rounded-[0.5rem] bg-opacity-50
                                "
                            >
                                {item?.name}
                            </a>
                        </div>
                    ))
                }
            </div>

        </nav>


    );
  };
  
  export default Navbar;
  