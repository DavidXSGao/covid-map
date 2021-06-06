import React from "react";

function CovidLegend({ legendItems }) {
  const legendTableStyle = {
    display: "flex",
    alignItems: "stretch",
    height: "10vh",
  };
  return (
    <div style={legendTableStyle}>
      {legendItems.map((legendItem) => (
        <div
          key={legendItem.title}
          style={{
            backgroundColor: legendItem.backgroundColor,
            color: legendItem.color,
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            fontWeight:"bolder",
            fontSize: "1.5em",
            textAlign: "center"
          }}
        >
          <span>{legendItem.title}</span>
        </div>
      ))}
    </div>
  );
}

export default CovidLegend;
