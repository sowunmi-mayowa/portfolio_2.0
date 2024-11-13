import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import { TypewriterEffectSmooth } from './components/ui/typewriter-effect'
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards'
import { ErrorpPage } from './pages/ErrorPage';
import Home from './pages/Home';
import Navbar from './assets/components/Navbar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorpPage />}>
        <Route path="/" element={ <Home /> } errorElement={<ErrorpPage />} />
      </Route>
    )
  )
  const words = [
    {
      text: "hello, welcome to my  protfolio website.",
    }
  ]
  
  return (
    // <div className="h-[50rem] w-full dark:bg-[#162c42] bg-indigo-900  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center flex-col justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    //   <div className="App md:mx-12" >
    //     <TypewriterEffectSmooth words={words}  />
    //     <div className='h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
    //     <InfiniteMovingCards items={testimonials} direction='left' speed='normal' pauseOnHover={true}/>
        
    //     </div>
    // </div>
    // <Swiitch />
    // </div>
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
