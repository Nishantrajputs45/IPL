function topTenEconomicalBowlers(matches,deliveries)
{
    const noOfRuns = {};
    const noOfOver ={};
    const result ={};
    const res = {};
    for (let match of matches) {
      for(let deliveri of deliveries)
      {
          if(match.id==deliveri.match_id && match.season=='2015')

          {
              const bowler=deliveri.bowler;
              if(noOfRuns[bowler])
              {
                noOfRuns[bowler] +=parseInt(deliveri.total_runs);
                if(deliveri.ball == '1')
                {
                    noOfOver[bowler] +=1  
                }
              }
              else
              {
                noOfRuns[bowler] =parseInt(deliveri.total_runs);
                noOfOver[bowler] =1;
              }
          }
      }
    }
   
    for(let run in noOfRuns)
    {
        result[run]=parseFloat((noOfRuns[run]/noOfOver[run]).toFixed(2));
    }
    let temp=Object.values(result);
    temp.sort(function(a, b){return a-b});
    
    for(let i=0;i<10;i++)
    {
      for(let j in result)
      {
      if(result[j]==temp[i])
      {
        
          res[j]=temp[i];
      }
    }
  }
    return res;
    
}

module.exports =topTenEconomicalBowlers;