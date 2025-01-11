
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
                mt-[24px] px-[16px] max-w-[600px] min-w-[300px] 
                max-h-[34px] rounded-[20px] bg-[black] items-center 
                flex justify-between backdrop-blur-lg bg-opacity-40
            "
        >
            {
                navItems && navItems.map((item, index) => (
                    <div  key={index} className="flex">
                        <a href={`/${item?.id}`} className="text-[white] font-[500] text-[12px]">{item?.name}</a>
                    </div>
                ))
            }
        </nav>
    );
  };
  
  export default Navbar;
  