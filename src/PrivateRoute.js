import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, ...rest}) {
    
    const isToken = localStorage.getItem("token");
    return isToken ? (children): (<Navigate to="/" />);
  }
  
  export default PrivateRoute;
  
