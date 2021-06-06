function LegendItem({title, backgroundColor, isFor, color}) {
  return {
    title,
    backgroundColor,
    isFor,
    color : color ? color : "black"
  }
}

export default LegendItem
