import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Subscriptions from './Components/Subscriptions/Subscriptions.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import History from './Components/History/History.jsx'
import SignIn from './Components/Auth/SignIn.jsx'
import SignUp from './Components/Auth/SignUp.jsx'
import Playlists from './Components/Playlists/Playlists.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='Subscription' element={<Subscriptions/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='History' element={<History/>}/>
      <Route path='Playlists' element={<Playlists/>}/>
    </Route>,
    <Route path='/SignIn' element={<SignIn/>}/>,
    <Route path='/Signup' element={<SignUp/>}/>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>  
  </React.StrictMode>,
)
