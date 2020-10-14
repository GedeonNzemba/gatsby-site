import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import RealEstate from "./RealEstate"
// import RealtyFarmLayout from "../components/realty_farm_layout"
// import Contact from "../components/contact"
// import RealtyRiskManagementLayout from "../components/realty_riskManagement_layout"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    
    {/* <RealtyFarmLayout />
    <RealtyRiskManagementLayout /> */}
   <RealEstate />
   {/* <RealtyFarmLayout />
   <RealtyRiskManagementLayout />
   <Contact /> */}
  </div>
)

export default IndexPage
