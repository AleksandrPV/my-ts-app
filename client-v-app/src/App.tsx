import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./routes/Main/Main.tsx"
import Portfolio from "./routes/Portfolio/Portfolio.tsx";
import Blog from "./routes/Blog/Blog.tsx";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage.tsx";
import Contact from "./routes/Contact/Contact.tsx";
import Login from "./routes/Login/Login.tsx";
import Registration from "./routes/Registration/Registration.tsx";


function App() {

    return (

                <Routes>
                    <Route path='/' element={< Main />} />
                    <Route path='/portfolio' element={< Portfolio />} />
                    <Route path='/blog' element={< Blog />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Registration' element={<Registration />} />
                    <Route path='/Contact' element={< Contact />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>

  )
}

export default App
