import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar'
import Heading from './components/mastHead'
import Footer from './components/footer'
import Call from './components/call'
import Testimonial from './components/testimonial'
import Show from './components/imgShow'
import Icons from './components/icons'


function Master(){
    return(
        <BrowserRouter>
        <NavBar/>
        <Heading/>  
        <Icons/>
        <Show/>
        <Testimonial/>
        <Call/>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master