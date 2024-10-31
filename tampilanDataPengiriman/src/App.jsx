import React, { Suspense, useState } from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"



const Home = React.lazy(() => import("./components/Home"))

const ShipmentsList = React.lazy(() => import("./components/Shipments/List"))
const ShipmentsCreate = React.lazy(() => import("./components/Shipments/Create"))


const App = () => {

  return (
    <Router>
      {/* <Navbar /> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mustofa Akhyar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                < NavLink className={({ isActive }) => 'nav-link $(isActive ? "active" : "")'} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                < NavLink className={({ isActive }) => 'nav-link $(isActive ? "active" : "")'} aria-current="page" to="/shipments">Shipments</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Suspense fallback= "Loading....">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shipments" element={<ShipmentsList />} />
            <Route path="/shipments/create" element={ <ShipmentsCreate /> } />
          
          </Routes>
        </Suspense>
        <div className="mt-2">&copy; 2024 Mahasiswa</div>
      </div>
    </Router>
  )
}

export default App