function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
   visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
   visualizeExtraRunsConcededByEachTeam(data.extraRunsConcededByEachTeam);
   visualizetopTenEconomicalBowlers(data.topTenEconomicalBowlers); 
   visualizetopTenRunGetters(data.topTenRunGetters);
   visualizetopTenWicketTaker(data.topTenWicketTaker);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
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
        text: "Matches"
      }
    },
    series: [
      {
        name: "Year",
        data: seriesData
      }
    ]
  });
}

function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
    
  
  const teams={};
  const years =[];
  const names=[];
  const datas=[];
  for(let year in matchesWonByEachTeam)
  {
    for(let team in matchesWonByEachTeam[year])
    {
      if(!teams[team])
      {
        teams[team]=[];
      }
    }
    years.push(year);
  }
  for(let year in matchesWonByEachTeam)
  {
     for(let i in teams)
      {
       if(!(matchesWonByEachTeam[year].hasOwnProperty(i)))
        {
          teams[i].push(0);
        }
      }
    
    for(let team in matchesWonByEachTeam[year])
    {
      if(teams[team])
      {
        teams[team].push(matchesWonByEachTeam[year][team]);
      }
    }
    
  }
  for(let team in teams)
  {
    names.push(team);
    datas.push(teams[team]);
  }
  

  Highcharts.chart('matches-Won-By-Each-Team', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'matches Won By Each Team'
    },
    xAxis: {
        categories: years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
          text: 'No. of Matches'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [
    {
      name: names[0],
      data: datas[0]
    },
    {
      name: names[1],
      data: datas[1]
    },
    {
      name: names[2],
      data: datas[2]
    },
    {
      name: names[3],
      data: datas[3]
    },
    {
      name: names[4],
      data: datas[4]
    },
    {
      name: names[5],
      data: datas[5]
    },
    {
      name: names[6],
      data: datas[6]
    },
    {
      name: names[7],
      data: datas[7]
    },
    {
      name: names[8],
      data: datas[8]
    },
    {
      name: names[9],
      data: datas[9]
    },
    {
      name: names[10],
      data: datas[10]
    },
    {
      name: names[11],
      data: datas[11]
    },
    {
      name: names[12],
      data: datas[12]
    },
    {
      name: names[13],
      data: datas[13]
    },
    {
      name: names[14],
      data: datas[14]
    },
    {
      name: names[15],
      data: datas[15]
    }
  ]
  });


}

function visualizeExtraRunsConcededByEachTeam(extraRunsConcededByEachTeam) {
  const seriesData = [];
  for (let team in extraRunsConcededByEachTeam) {
    seriesData.push([team, extraRunsConcededByEachTeam[team]]);
  }

  Highcharts.chart("extra-Runs-Conceded-By-Each-Team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded By EachTeam"
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
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Team",
        data: seriesData
      }
    ]
  });
}

function visualizetopTenEconomicalBowlers(topTenEconomicalBowlers){
  const seriesData = [];
  for (let bowler in topTenEconomicalBowlers) {
    seriesData.push([bowler,topTenEconomicalBowlers[bowler]]);
  }

  Highcharts.chart("top-Ten-Economical-Bowlers", {
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
function visualizetopTenRunGetters(topTenRunGetters) {
  const seriesData = [];
  for (let player in topTenRunGetters) {
    seriesData.push([player, topTenRunGetters[player]]);
  }
  

  Highcharts.chart("top-Ten-Run-Getters", {
    chart: {
      type: "column"
    },
    title: {
      text: "top Ten Run Getters"
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
        text: "Runs"
      }
    },
    series: [
      {
        name: "Player",
        data: seriesData
      }
    ]
  });
}
function visualizetopTenWicketTaker(topTenWicketTaker) {
  const seriesData = [];
  for (let player in topTenWicketTaker) {
    seriesData.push([player, topTenWicketTaker[player]]);
  }
  

  Highcharts.chart("top-Ten-Wicket-Taker", {
    chart: {
      type: "column"
    },
    title: {
      text: "top Ten Wicket Taker"
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
        text: "Wickets"
      }
    },
    series: [
      {
        name: "Player",
        data: seriesData
      }
    ]
  });
}