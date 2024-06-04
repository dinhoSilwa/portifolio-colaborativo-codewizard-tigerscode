import { LuMenu, LuX } from "react-icons/lu"
import { useState } from "react"
import GitButton from "./git-button"
import ThemeToggle from "./theme-toggle"
import Menu from "./menu"

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            <header 
                className="flex items-center justify-between px-4 h-24 lg:flex-row-reverse lg:justify-start lg:gap-8"
            >
                <GitButton primary />
                
                <div className="flex justify-center items-center gap-3">
                    <ThemeToggle />
                    <button className="dark:text-white-two hover:text-gray-text text-black lg:hidden" onClick={handleOpenMenu}>
                        <LuMenu size={36}/>
                    </button>
                </div>

                <div className="hidden lg:block">
                    <Menu />
                </div>
            </header>

            {
                open && (
                    <section className="fixed right-0 max-w-[90vw] w-[90vw] h-[100vh] bg-black dark:bg-primary shadow-lg p-10">
                        <div className="flex justify-between items-center mb-5 ">
                            <h1 className="font-title text-xl text-white-one">Frontend Fusion</h1>
                            <button className="cursor-pointer hover:text-gray-text text-white-one" onClick={handleOpenMenu}>
                                <LuX size={24} />
                            </button>
                        </div>
                        <Menu />
                    </section>
                )
            }
        </>
     );
}
 
export default Header;