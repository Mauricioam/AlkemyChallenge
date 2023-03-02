import React from 'react';
import Layout from './Layout';

function Loader() {
  return (
    <Layout>
    <div className="d-flex  justify-content-center align-items-center" style={{minWidth:"100vw",minHeight:"100vh"}}>
    <div style={{width:"7rem", height:"7rem"}} className="spinner-border text-light" role="status">
    <span className="visually-hidden">Loading...</span>
     </div>
    </div>
    </Layout>
  )
}

export default Loader;