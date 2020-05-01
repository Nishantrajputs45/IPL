function topTenEconomicalBowlerForGivenYear(matches,deliveries)
{
    
    const economicalBowlers={};
    for(let y=2008;y<=2019;y++)
    {
      let noOfRuns = {};
      let noOfOver ={};
      let result ={};
      let res = {};
    for (let match of matches) {
      for(let deliveri of deliveries)
      {
          if(match.id==deliveri.match_id && parseInt(match.season)==y)

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

  economicalBowlers[y]=res;
}
  return economicalBowlers;
    
}
 
module.exports =topTenEconomicalBowlerForGivenYear;