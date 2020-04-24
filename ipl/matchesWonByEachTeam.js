function matchesWonByEachTeam(matches) {
    const result = {};
    for (let match1 of matches) {
        let season =match1.season;
        if(!(result[season]))
        {
          let temp={};
          for(match2 of matches)
          {
            let winner =match2.winner;
            if(temp[winner] && match1.season==match2.season)
            {
              temp[winner] +=1;
            }
            if(!(temp[winner]) && match1.season==match2.season)
            {
              temp[winner] =1;
            }
          }
          result[season]=temp;
        }
    }
    return result;
  }
  
  module.exports = matchesWonByEachTeam;
  