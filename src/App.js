import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Container from './component/page/Container';
import Footer from './component/Footer';
import LogIn from './component/page/LogIn'
import SingUp from './component/page/SingUp';
import Tela from './component/Tela';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar titulo={'Lista del Grupo'}/>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/singup' element={<SingUp/>}/>
          <Route path='/tela' element={<Tela/>}/>
        </Routes>
        <Footer/>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
