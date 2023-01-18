import { BrowserRouter, } from "react-router-dom"
import HomeScreen from "./home"
import KnoMoreSection from "./know_more"
import { Route, Routes } from "react-router"

//react-router-dom
function WebApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
                <Route path='/know-more' element={<KnoMoreSection></KnoMoreSection>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WebApp