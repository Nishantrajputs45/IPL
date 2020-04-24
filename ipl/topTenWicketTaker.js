function topTenWicketTaker(deliveries)
{
    const player ={};
    const res= {};
    for(let bowl of deliveries )
    {
      let bowler=bowl.bowler;
      if(player[bowler])
      {
          if(bowl.player_dismissed !='' && bowl.dismissal_kind !='run out' && bowl.is_super_over =='0')
          {
          player[bowler] +=1;
          }
      }
      else
      {
          player[bowler] =1;
      }
    }
    let temp=Object.values(player);
    temp.sort(function(a, b){return b-a});
    for(let i=0;i<10;i++)
     {
       for(let j in player)
       {
       if(player[j]==temp[i])
       {
         
           res[j]=temp[i];
       }
     }
   }
   return res;
}
module.exports =topTenWicketTaker;