import React from 'react'
import Sidebar from "@/app/components/back/common/Sidebar";
import Navbar from "@/app/components/back/common/Navbar";
import Footer from "@/app/components/back/common/Footer";

const SayfalarPage = () => {
  return (
      <>
          <Sidebar/>

          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">

                  <Navbar/>

                  <div className="container-fluid">

                      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">Sayfalar</h1>
                      </div>
                  </div>
              </div>

              <Footer/>
          </div>
      </>
  )
}

export default SayfalarPage
