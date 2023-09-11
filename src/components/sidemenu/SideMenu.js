import "bootstrap-icons/font/bootstrap-icons.css";
import {useEffect, useState} from "react";
import {OpcionesMenu} from "./OpcionesMenu";

export const SideMenu = () => {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {

            document.querySelector(".themeButton").classList.add('dark:bg-neutral-900');
            document.querySelector(".iconito").classList.add('bi-sun');
            document.querySelector("html").classList.add('dark');
        } else {
            document.querySelector(".iconito").classList.remove('bi-sun');
            document.querySelector(".iconito").classList.add('bi-moon');
            document.querySelector("html").classList.remove('dark');
        }
    }, [theme]);

    const themeToggler = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }


    return (
        <>
            <div className="flex h-screen w-16 flex-col justify-between border-e bg-white dark:bg-neutral-900 ">
                <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center">
                        <span
                            className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">BOXVI</span>
                    </div>

                    <div className="border-t border-gray-100">
                        <div className="px-2">

                            <ul className="space-y-1 border-t border-gray-100 pt-4">
                                {OpcionesMenu.map((index) => {
                                    const {id, name, path, icon1, icon2} = index;

                                    return (
                                        <li key={id}>
                                            <a
                                                href={path}
                                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            >
                                                <i className={icon1}></i>
                                                <span
                                                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                >{name}</span>
                                            </a>
                                        </li>
                                    )


                                })}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2 themeButton">

                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 "
                        onClick={themeToggler}
                    >

                        <i className="bi iconito"></i>

                        <span
                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                        >Cambio de Tema</span>
                    </button>

                </div>


            </div>


        </>

    )
};
