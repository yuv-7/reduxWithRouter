import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout/Layout';
import {Home,About,Contact,SignUp,Login} from './Components';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="login" element={<Login />}/>

      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App
