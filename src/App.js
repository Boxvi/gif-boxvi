import './App.css';
import {SideMenu} from "./components/sidemenu/SideMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hola from "./componente/Hola";
import {Inicio} from "./components/inicio/Inicio";
import Random from "./components/random/Random";

function App() {
    return (
        <BrowserRouter>
            <main style={{
                overflowX: "hidden" ,
                display: "flex",
                justifyContent: "space-between"
            }} className={"dark:bg-neutral-900"}>

                <div className={"flex h-screen w-16 "}
                     style={{
                         backgroundColor: "red"
                     }}
                >
                    <SideMenu/>
                </div>

                <div style={{
                    width: "100%"
                }} className={"p-2"}>

                    <Routes>
                        <Route path={'/'} element={<Inicio/>}/>
                        <Route path={'/random'} element={<Random/>}/>
                        <Route path={'/hola'} element={<Hola/>}/>
                    </Routes>
                </div>

            </main>
        </BrowserRouter>

    )
}


export default App;
