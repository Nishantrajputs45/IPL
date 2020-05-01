const fs =require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam");
const topTenEconomicalBowlers = require("./ipl/topTenEconomicalBowlers");
const topTenRunGetters = require("./ipl/topTenRunGetters");
const topTenWicketTaker = require("./ipl/topTenWicketTaker");
const fetchTopTenBowlerYearWise = require("./ipl/topTenEconomicalBowlerForGivenYear")

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
     csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      let result1 = matchesPlayedPerYear(matches);
      let result2 = matchesWonByEachTeam(matches);
      
      let result3 = extraRunsConcededByEachTeam(matches,deliveries);
      let result4 = topTenEconomicalBowlers(matches,deliveries);
      let result5 = topTenRunGetters(deliveries);
      let result6 = topTenWicketTaker(deliveries);
      let result7 = fetchTopTenBowlerYearWise(matches,deliveries);
      saveMatchesPlayedPerYear(result1,result2,result3,result4,result5,result6,result7);
    });
  });
}

function saveMatchesPlayedPerYear(result1,result2,result3,result4,result5,result6,result7) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchesWonByEachTeam: result2,
    extraRunsConcededByEachTeam:result3,
    topTenEconomicalBowlers :result4,
    topTenRunGetters : result5,
    topTenWicketTaker : result6,
    fetchTopTenBowlerYearWise : result7
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
