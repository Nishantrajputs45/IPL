function topTenRunGetters(deliveries)
{
   const player ={};
   const res= {};
   for(let bat of deliveries )
   {
     let batsman=bat.batsman;
     if(player[batsman])
     {
       if(bat.is_super_over =='0')
       {
         player[batsman] +=parseInt(bat.batsman_runs);
       }
     }
     else
     {
         player[batsman] =parseInt(bat.batsman_runs);
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
module.exports =topTenRunGetters;