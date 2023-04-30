import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import axios from "axios";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const LineGraph = () => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();

      const chartData = {
        labels: [
          "Cases",
          "Deaths",
          "Recovered",
          "Active",
          "Critical",
          "Tests",
          "CasesPerOneMillion",
          "TodayCases",
          "AffectedCountries",
          "Population",
          "DeathsPerOneMillion",
        ],
        datasets: [
          {
            label: "Covid-19",
            data: [
              data.cases,
              data.deaths,
              data.recovered,
              data.active,
              data.critical,
              data.tests,
              data.casesPerOneMillion,
              data.todayCases,
              data.affectedCountries,
              data.population,
              data.deathsPerOneMillion,
            ],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance
      chartRef.current.destroy();
    }

    // Create new chart instance
    chartRef.current = new Chart("myChart", {
      type: "line",
      data: chartData,
      options: {
        scales: {
          y: {
            suggestedMin: 100000,
            suggestedMax: 10000000,
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div>
      <canvas id="myChart" height="100" style={{ cursor: "pointer" }} />
    </div>
  );
};

export default LineGraph;
