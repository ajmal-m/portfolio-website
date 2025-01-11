
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
        <nav 
            className="
                mt-[24px] px-[16px] max-w-[600px] min-w-[600px] 
                max-h-[56px] rounded-[1rem] bg-[black] items-center 
                flex justify-between backdrop-blur-lg bg-opacity-40
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
        </nav>
    );
  };
  
  export default Navbar;
  