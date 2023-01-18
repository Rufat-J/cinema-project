import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import Mainpage from './components/Mainpage.jsx'
import {

    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx'
import Calender from "./components/Calender.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <BrowserRouter>
          <Header />
          <Routes>

              <Route path="/" element={<Mainpage />} />
              <Route path="calender" element={<Calender />} />
              <Route path="movies" />
              <Route path="tickets" />

          </Routes>
          <Footer />
      </BrowserRouter>

      {/*<RouterProvider router={
          createBrowserRouter(
              createRoutesFromElements(
              <Route path="/" element={<Header />}>
                  <Route index element={<Mainpage />}/>
                  {/*<Route path={"home"} element={<Mainpage/>}/>}
                  <Route path="calender" element={<Calender/>}/>
                  <Route path="movies" />
                  <Route path="tickets" />
              </Route>
                  )
                  )
                  }/> */}

  </React.StrictMode>
)