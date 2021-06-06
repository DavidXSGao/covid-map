import useCountriesLoad from "../hooks/useCountriesLoad";
import CovidLegend from "./CovidLegend";
import CovidMap from "./CovidMap";
import Loading from "./Loading";
import legendItems from "./../entities/LegendItems";

function Covid() {
  const [countries, loading] = useCountriesLoad();
  const reverseLegendItems = [...legendItems].reverse()

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries}/>
          <CovidLegend legendItems={reverseLegendItems}/>
        </div>
      )}
    </div>
  );
}

export default Covid;
