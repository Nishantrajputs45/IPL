function  eventListener()
{ 
    let year=document.getElementById("year").value;
    function fetchAndVisualizeData() 
    {
            fetch("./data.json")
             .then(r => r.json())
              .then(visualizeData);
    }

      fetchAndVisualizeData();

    function visualizeData(data) {

    visualizetopTenEconomicalBowlers(data.fetchTopTenBowlerYearWise[year]); 
   
    }
    function visualizetopTenEconomicalBowlers(topTenEconomicalBowlers){
      const seriesData = [];
       for (let bowler in topTenEconomicalBowlers) {
       seriesData.push([bowler,topTenEconomicalBowlers[bowler]]);
        }

       Highcharts.chart("top-Ten-Economical-Bowlers-yearwise", {
      chart: {
     type: "column"
     },
    title: {
    text: "top Ten Economical Bowlers"
    },
    subtitle: {
     text:
    'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
     xAxis: {
     type: "category"
     },
   yAxis: {
   min: 0,
   title: {
  text: "Economy"
  }
  },
   series: [
  {
  name: "Bowler",
  data: seriesData
  }
  ]
  });
  }
    
 }
