import React from "react";

function Loading() {
  const loadingStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={loadingStyle}>
      <div className="spinner-border" role="status" />
    </div>
  );
}

export default Loading;
