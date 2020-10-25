import React from "react"
import RealtyFarmLayout from "../components/realty_farm_layout"
// import Navbar from "../components/Navbar"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RealEstate from "./RealEstate"
import RiskManagement from "./RiskManagement"
import LocataireFarm from "./Farm"

const Farm = (props) => {

    return (
        <>
           <nav className="realEstate-navbar">
          {/* <Router>
            <Navbar />
            <Switch>
              <Route path='/Farm' exact component={LocataireFarm} />
              <Route path='/RealEstate' component={RealEstate} />
              <Route path='/RiskManagement' component={RiskManagement} />
            </Switch>
          </Router> */}
            {/* <div className="realEstate-logo" />
            <div id="burger" /> */}
          </nav>
            <RealtyFarmLayout />
        </>
    )
}
export default Farm