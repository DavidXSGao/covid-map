import LegendItem from "./LegendItem";

const legendItems = [
  LegendItem({
    title: "1,000,000+",
    backgroundColor: "#741f1f",
    isFor: (cases) => cases >= 1_000_000,
    color: "white",
  }),
  LegendItem({
    title: "500,000 - 999,999",
    backgroundColor: "#9c2929",
    isFor: (cases) => cases >= 500_000 && cases <= 999_999,
    color: "white",
  }),
  LegendItem({
    title: "200,000 - 499,999",
    backgroundColor: "#c57f7f",
    isFor: (cases) => cases >= 200_000 && cases <= 499_999,
  }),
  LegendItem({
    title: "50,000 - 199,999",
    backgroundColor: "#d8aaaa",
    isFor: (cases) => cases >= 50_000 && cases <= 199_999,
  }),
  LegendItem({
    title: "0 - 49,999",
    backgroundColor: "#ebd4d4",
    isFor: (cases) => cases >= 0 && cases <= 49_999,
  }),
  LegendItem({ title: "No Data", backgroundColor: "#ffffff", isFor: () => true }),
];

export default legendItems;
