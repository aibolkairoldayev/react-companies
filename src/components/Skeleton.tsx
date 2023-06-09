import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props:any) => (
  <ContentLoader 
    speed={2}
    width={470}
    height={120}
    viewBox="0 0 470 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="8" rx="0" ry="0" width="100" height="100" /> 
    <rect x="130" y="20" rx="0" ry="0" width="220" height="20" /> 
    <rect x="130" y="70" rx="0" ry="0" width="220" height="20" /> 
    <rect x="365" y="35" rx="0" ry="0" width="40" height="35" /> 
    <rect x="415" y="35" rx="0" ry="0" width="40" height="35" /> 
    <rect x="215" y="31" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
  )
  
  export default MyLoader