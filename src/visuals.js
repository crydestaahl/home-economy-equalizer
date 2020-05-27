import React, { Component, useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Visuals = () => {

    useEffect(() => {
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        chart.paddingRight = 20;

        // Add data
        chart.data = [
            {
            "deltagare": "Chrille",
            "points": 501.9
            }, {
            "deltagare": "Ella",
            "points": 301.9
            },
        ];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "points";
        pieSeries.dataFields.category = "deltagare";
    })

  useEffect((chart) => {
    if (chart) {
        chart.dispose();
      }
  })

    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default Visuals;