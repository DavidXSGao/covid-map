import { useState, useEffect, useCallback } from "react";
import papa from "papaparse";

import { features } from "../../src/data/countries.json";
import legendItems from "../entities/LegendItems"

function useCountriesLoad() {
  const covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  const [countries, setCountries] = useState(features);
  const [loading, setLoading] = useState(true);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const processCovidData = useCallback(
    (covidCountries) => {
      for (let i in countries) {
        const country = countries[i];
        const covidCountry = covidCountries.find(
          (covidCountry) => covidCountry.ISO3 === country.properties.ISO_A3
        );
        country.properties.confirmed = 0;
        country.properties.confirmedText = "0";
        if (covidCountry) {
          country.properties.confirmed = Number(covidCountry.Confirmed);
          country.properties.confirmedText = formatNumberWithCommas(
            covidCountry.Confirmed
          );
        }
        setCountryColor(country)
      }
      setCountries(countries);
      setLoading(false);
    },
    [countries]
  );

  const setCountryColor = (country) => {
    const legendItem = legendItems.find((item) => item.isFor(country.properties.confirmed))

    if (legendItem) {
      country.properties.color = legendItem.backgroundColor
    }
  }

  useEffect(() => {
    papa.parse(covidUrl, {
      download: true,
      header: true,
      complete: (res) => processCovidData(res.data),
    });
  }, [processCovidData]);

  return [countries, loading];
}

export default useCountriesLoad;
