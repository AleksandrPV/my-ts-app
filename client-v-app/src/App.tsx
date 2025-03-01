import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./routes/Main/Main.tsx"
import Portfolio from "./routes/Portfolio/Portfolio.tsx";
import Animation from "./routes/Animation/Animation.tsx";
import Blog from "./routes/Blog/Blog.tsx";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage.tsx";
import Contact from "./routes/Contact/Contact.tsx";
import RtkQuery from "./routes/RtkQuery/RtkQuery.tsx";
import Login from "./routes/Login/Login.tsx";
import Registration from "./routes/Registration/Registration.tsx";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path='/' element={< Main />} />
                <Route path='/portfolio' element={< Portfolio />} />
                <Route path='/animation' element={< Animation />} />
                <Route path='/blog' element={< Blog />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Contact' element={< Contact />} />
                <Route path='/RtkQuery' element={< RtkQuery />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </ThemeProvider>
  )
}

export default App
