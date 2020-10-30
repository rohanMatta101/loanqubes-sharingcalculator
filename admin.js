

exports.getCalc=(req,res,next)=>{
    res.render('MYVIEWS/calc',{
        pagetitle:'loanqubes'
    })
}
exports.postCalc=(req,res,next)=>{
    let incentives=[];
    
     let captain=req.body.captain;

     let one=req.body.memberone;
     let oneType=req.body.onetype;

     let two=req.body.membertwo;
     let twoType=req.body.twotype;
    
    
     let three=req.body.memberthree;
     let threeType=req.body.threetype;
    
    
     let four=req.body.memberfour;
     let fourType=req.body.fourtype;
    
    
     let five=req.body.memberfive;
     let fiveType=req.body.fivetype;
    
    
      let six=req.body.membersix;
      let sixType=req.body.sixtype;
    
    
     let seven=req.body.memberseven;
     let sevenType=req.body.seventype;
    
    
     let eight=req.body.membereight;
     let eightType=req.body.eighttype;
    
    
     let nine=req.body.membernine;
     let nineType=req.body.ninetype;
    
    
     let ten=req.body.memberten;
     let tenType=req.body.tentype;
    
    let commission=0.03;//0.025

    
    
    //captain
    let temp;
    if(captain>0 && captain<1000000)
    {
        captain=10000;
        temp=captain;
        incentives.push(captain);
    }
    else if(captain>=1000000&&captain<2000000)
    {
        captain=captain*0.01;
        temp=captain;
        incentives.push(captain);
    }
    else if(captain>=2000000)
    {
        captain=captain*0.015;
        temp=captain;
        incentives.push(captain);

    }
    
    //one
    if(oneType==='S'||oneType==='s')
    {
    if(one>0 && one<1500000)
    {
        one=15000;
        incentives.push(one);
    }
    else if(one>=1500000&&one<2000000)
    {
        one=one*0.01;
        /*if(one<5000)
        {
            one=5000;
        }*/
        incentives.push(one);
    }
    else if(one>=2000000&&one<4000000)
    {
        one=one*0.0125;
        incentives.push(one);
    }
    else if(one>=4000000)
    {
        one=one*0.0150;
        incentives.push(one);
    }
    }
    else{
        if(one>0 && one<750000)
        {
            one=7500;
            incentives.push(one);
        }
        else if(one>=750000&&one<2000000)
        {
            one=one*0.01;
            /*if(one<5000)
            {
                one=5000;
            }*/
            incentives.push(one);
        }
        else if(one>=2000000)
        {
            one=one*0.0125;
            incentives.push(one);
        }
         

    }
    //two
    if(twoType==='S'||twoType==='s')
    {
    if(two>0 && two<1500000)
    {
        two=15000;
        incentives.push(two);
    }
    else if(two>=1500000&&two<2000000)
    {
        two=two*0.01;
        /*if(two<5000)
        {
            two=5000;
        }*/
        incentives.push(two);
    }
    else if(two>=2000000&&two<4000000)
    {
        two=two*0.0125;
        incentives.push(two);
    }
    else if(two>=4000000)
    {
        two=two*0.0150;
        incentives.push(two);
    }
    }
    else{
        if(two>0 && two<750000)
        {
            two=7500;
            incentives.push(two);
        }
        else if(two>=750000&&two<2000000)
        {
            two=two*0.01;
            /*if(two<5000)
            {
                two=5000;
            }*/
            incentives.push(two);
        }
        else if(two>=2000000)
        {
            two=two*0.0125;
            incentives.push(two);
        }
    }
    //three
    if(threeType==='S'||threeType==='s')
    {
    if(three>0 && three<1500000)
    {
        three=15000;
        incentives.push(three);
    }
    else if(three>=1500000&&three<2000000)
    {
        three=three*0.01;
        /*if(three<5000)
        {
            three=5000;
        }*/
        incentives.push(three);
    }
    else if(three>=2000000&&three<4000000)
    {
        three=three*0.0125;
        incentives.push(three);
    }
    else if(three>=4000000)
    {
        three=three*0.0150;
        incentives.push(three);
    }
    }
    else{
        if(three>0 && three<750000)
        {
            three=7500;
            incentives.push(three);
        }
        else if(three>=750000&&three<2000000)
        {
            three=three*0.01;
            /*if(three<5000)
            {
                three=5000;
            }*/
            incentives.push(three);
        }
        else if(three>=2000000)
        {
            three=three*0.0125;
            incentives.push(three);
        }
    }
    //four
    if(fourType==='S'||fourType==='s')
    {
    if(four>0 && four<1500000)
    {
        four=15000;
        incentives.push(four);
    }
    else if(four>=1500000&&four<2000000)
    {
        four=four*0.01;
        /*if(four<5000)
        {
            four=5000;
        }*/
        incentives.push(four);
    }
    else if(four>=2000000&&four<4000000)
    {
        four=four*0.0125;
        incentives.push(four);
    }
    else if(four>=4000000)
    {
        four=four*0.0150;
        incentives.push(four);
    }
    }
    else{
        if(four>0 && four<750000)
        {
            four=7500;
            incentives.push(four);
        }
        else if(four>=750000&&four<2000000)
        {
            four=four*0.01;
            /*if(four<5000)
            {
                four=5000;
            }*/
            incentives.push(four);
        }
        else if(four>=2000000)
        {
            four=four*0.0125;
            incentives.push(four);
        }
    }
    //five
    if(fiveType==='S'||fiveType==='s')
    {
    if(five>0 && five<1500000)
    {
        five=15000;
        incentives.push(five);
    }
    else if(five>=1500000&&five<2000000)
    {
        five=five*0.01;
        /*if(five<5000)
        {
            five=5000;
        }*/
        incentives.push(five);
    }
    else if(five>=2000000&&five<4000000)
    {
        five=five*0.0125;
        incentives.push(five);
    }
    else if(five>=4000000)
    {
        five=five*0.0150;
        incentives.push(five);
    }
    }
    else{
        if(five>0 && five<750000)
        {
            five=7500;
            incentives.push(five);
        }
        else if(five>=750000&&five<2000000)
        {
            five=five*0.01;
            /*if(five<5000)
            {
                five=5000;
            }*/
            incentives.push(five);
        }
        else if(five>=2000000)
        {
            five=five*0.0125;
            incentives.push(five);
        }
    }
    //six
    if(sixType==='S'||sixType==='s')
    {
    if(six>0 && six<1500000)
    {
        six=15000;
        incentives.push(six);
    }
    else if(six>=1500000&&six<2000000)
    {
        six=six*0.01;
        /*if(six<5000)
        {
            six=5000;
        }*/
        incentives.push(six);
    }
    else if(six>=2000000&&six<4000000)
    {
        six=six*0.0125;
        incentives.push(six);
    }
    else if(six>=4000000)
    {
        six=six*0.0150;
        incentives.push(six);
    }
    }
    else{
        if(six>0 && six<750000)
        {
            six=7500;
            incentives.push(six);
        }
        else if(six>=750000&&six<2000000)
        {
            six=six*0.01;
            /*if(six<5000)
            {
                six=5000;
            }*/
            incentives.push(six);
        }
        else if(six>=2000000)
        {
            six=six*0.0125;
            incentives.push(six);
        }
    }
    //seven
    if(sevenType==='S'||sevenType==='s')
    {
    if(seven>0 && seven<1500000)
    {
        seven=15000;
        incentives.push(seven);
    }
    else if(seven>=1500000&&seven<2000000)
    {
        seven=seven*0.01;
        /*if(seven<5000)
        {
            seven=5000;
        }*/
        incentives.push(seven);
    }
    else if(seven>=2000000&&seven<4000000)
    {
        seven=seven*0.0125;
        incentives.push(seven);
    }
    else if(seven>=4000000)
    {
        seven=seven*0.0150;
        incentives.push(seven);
    }
    }
    else{
        if(seven>0 && seven<750000)
        {
            seven=7500;
            incentives.push(seven);
        }
        else if(seven>=750000&&seven<2000000)
        {
            seven=seven*0.01;
            /*if(seven<5000)
            {
                seven=5000;
            }*/
            incentives.push(seven);
        }
        else if(seven>=2000000)
        {
            seven=seven*0.0125;
            incentives.push(seven);
        }
    }
    //eight
    if(eightType==='S'||eightType==='s')
    {
    if(eight>0 && eight<1500000)
    {
        eight=15000;
        incentives.push(eight);
    }
    else if(eight>=1500000&&eight<2000000)
    {
        eight=eight*0.01;
        /*if(eight<5000)
        {
            eight=5000;
        }*/
        incentives.push(eight);
    }
    else if(eight>=2000000&&eight<4000000)
    {
        eight=eight*0.0125;
        incentives.push(eight);
    }
    else if(eight>=4000000)
    {
        eight=eight*0.0150;
        incentives.push(eight);
    }
    }
    else{
        if(eight>0 && eight<750000)
        {
            eight=7500;
            incentives.push(eight);
        }
        else if(eight>=750000&&eight<2000000)
        {
            eight=eight*0.01;
            /*if(eight<5000)
            {
                eight=5000;
            }*/
            incentives.push(eight);
        }
        else if(eight>=2000000)
        {
            eight=eight*0.0125;
            incentives.push(eight);
        }
    }
    //nine
    if(nineType==='S'||nineType==='s')
    {
    if(nine>0 && nine<1500000)
    {
        nine=15000;
        incentives.push(nine);
    }
    else if(nine>=1500000&&nine<2000000)
    {
        nine=nine*0.01;
        /*if(nine<5000)
        {
            nine=5000;
        }*/
        incentives.push(nine);
    }
    else if(nine>=2000000&&nine<4000000)
    {
        nine=nine*0.0125;
        incentives.push(nine);
    }
    else if(nine>=4000000)
    {
        nine=nine*0.0150;
        incentives.push(nine);
    }
    }
    else{
        if(nine>0 && nine<750000)
        {
            nine=7500;
            incentives.push(nine);
        }
        else if(nine>=750000&&nine<2000000)
        {
            nine=nine*0.01;
            /*if(nine<5000)
            {
                nine=5000;
            }*/
            incentives.push(nine);
        }
        else if(nine>=2000000)
        {
            nine=nine*0.0125;
            incentives.push(nine);
        }
    }
    //ten
    if(tenType==='S'||tenType==='s')
    {
    if(ten>0 && ten<1500000)
    {
        ten=15000;
        incentives.push(ten);
    }
    else if(ten>=1500000&&ten<2000000)
    {
        ten=ten*0.01;
        /*if(ten<5000)
        {
            ten=5000;
        }*/
        incentives.push(ten);
    }
    else if(ten>=2000000&&ten<4000000)
    {
        ten=ten*0.0125;
        incentives.push(ten);
    }
    else if(ten>=4000000)
    {
        ten=ten*0.0150;
        incentives.push(ten);
    }
    }
    else{
        if(ten>0 && ten<750000)
        {
            ten=7500;
            incentives.push(ten);
        }
        else if(ten>=750000&&ten<2000000)
        {
            ten=ten*0.01;
            /*if(ten<5000)
            {
                ten=5000;
            }*/
            incentives.push(ten);
        }
        else if(ten>=2000000)
        {
            ten=ten*0.0125;
            incentives.push(ten);
        }
    }
    incentives=incentives.map(Math.round);
    //console.log('incentive array' + incentives);
    //OFFICE COST
    let officeCost;
    officeCost=50000/incentives.length;
    //console.log(officeCost);
    //OFFICE COST

    //totalcommission

    let captaincom;
    captaincom=commission*(req.body.captain);
    let onecom;
    onecom=commission*(req.body.memberone);
    let twocom;
    twocom=commission*(req.body.membertwo);
    let threecom;
    threecom=commission*(req.body.memberthree);
    let fourcom;
    fourcom=commission*(req.body.memberfour);
    let fivecom;
    fivecom=commission*(req.body.memberfive);
    let sixcom;
    sixcom=commission*(req.body.membersix);
    let sevencom;
    sevencom=commission*(req.body.memberseven);
    let eightcom;
    eightcom=commission*(req.body.membereight);
    let ninecom;
    ninecom=commission*(req.body.membernine);
    let tencom;
    tencom=commission*(req.body.memberten);
    
    let marginarr=[];
    //console.log(captaincom);
    //console.log(threecom);
    let marcaptain;
    let marone;
    let martwo;
    let marthree;
    let marfour;
    let marfive;
    let marsix;
    let marseven;
    let mareight;
    let marnine;
    let marten;
    if(captaincom!==0)
    {
         marcaptain=captaincom-incentives[0]-officeCost;
         marginarr.push(marcaptain);
    }
    if(onecom!==0)
    {
         marone=onecom-incentives[1]-officeCost;
        marginarr.push(marone);
    }
    if(twocom!==0)
    {
         martwo=twocom-incentives[2]-officeCost;
        marginarr.push(martwo);
    }
    if(threecom!==0)
    {
         marthree=threecom-incentives[3]-officeCost;
        marginarr.push(marthree);
    }
    if(fourcom!==0)
    {
         marfour=fourcom-incentives[4]-officeCost;
        marginarr.push(marfour);
    }
    if(fivecom!==0)
    {
         marfive=fivecom-incentives[5]-officeCost;
        marginarr.push(marfive);
    }
    if(sixcom!==0)
    {
         marsix=sixcom-incentives[6]-officeCost;
        marginarr.push(marsix);
    }
    if(sevencom!==0)
    {
         marseven=sevencom-incentives[7]-officeCost;
        marginarr.push(marseven);
    }
    if(eightcom!==0)
    {
         mareight=eightcom-incentives[8]-officeCost;
        marginarr.push(mareight);
    }
    if(ninecom!==0)
    {
         marnine=ninecom-incentives[9]-officeCost;
        marginarr.push(marnine);
    }
    if(tencom!==0)
    {
         marten=tencom-incentives[10]-officeCost;
        marginarr.push(marten);
    }
    
    let x=0;

    for(var y=0;y<marginarr.length;y++)
    {
        
        x=x+marginarr[y];
    }
    
    let marsumtotal=x;
    //console.log(x);
    //SHARE OF PROFIT
    let profit;
    let incentcap;
    incentcap=+incentives[0];
    if(x>=75000 && x<125000)
    {
      if(marcaptain<0)
      {
          
          profit=0.20*x;
          profit=profit+incentcap;
          if(profit<=20000){
              profit=20000;//10000
          }
      }
      else{
        x=x-marcaptain;
        profit=0.20*x;
        profit=profit+incentcap;
        if(profit<=20000){
            profit=20000;//10000
        }
 
      }

    }
    else if(x>=125000 && x<175000)
    {
        if(marcaptain<0)
      {
          /*marcaptain=Math.abs(marcaptain);
          x=x-marcaptain;*/
          profit=0.25*x;
          profit=profit+incentcap;
          if(profit<=20000){
            profit=20000;//10000
        }
      }
      else{
        x=x-marcaptain;
        profit=0.20*x;
        profit=profit+incentcap;
        if(profit<=20000){
            profit=20000;//10000
        }
 
      }
        
        
    }
    else if(x>=175000)
    {
        if(marcaptain<0)
      {
          /*marcaptain=Math.abs(marcaptain);
          x=x-marcaptain;*/ 
          profit=0.30*x;
          profit=profit+incentcap;
          if(profit<=20000){
            profit=20000;//10000
        }
      }
      else{
        x=x-marcaptain;
        profit=0.20*x;
        profit=profit+incentcap;
        if(profit<=20000){
            profit=20000;//10000
        }
 
      }
        
        
    }
    else if( (x<0 || (x>0 && x<75000)))
    {
        //console.log('in'); 
        if(incentcap<=10000 )
         {
             if(marcaptain<0){
             profit=0.20*x;
             profit=profit+incentcap;
             if(profit<=20000)
             {
                 profit=20000;//10000
             }
            }
            else{
                x=x-marcaptain;
                
                
                profit=0.20*x;
                
                profit=profit+incentcap;
                if(profit<=20000){
                    profit=20000;//10000
                }

            }
         }
         else if(incentcap>10000)
         {
            if(marcaptain<0){
                profit=0.20*x;
                profit=profit+incentcap;
                if(profit<=20000){
                    profit=20000;//10000
                }
               }
               else{
                   x=x-marcaptain;
                   
                   
                   profit=0.20*x;
                   
                   profit=profit+incentcap;
                   if(profit<=20000){
                    profit=20000;//10000
                }
   
               }   
         }
    }
    //console.log(profit);
    let boolbad=false;
    let boolgood=false;
    let message;
    console.log(marsumtotal);
    //console.log(x);
    if(profit<=10000)
    { 
        boolbad=true;
        message='Pull up your socks ! You can do better';
      
    }
    if(marcaptain>0 && marsumtotal>=50000)
    {
       boolgood=true;
       message='Keep it up ! Well done';
    }
    var rounded=Math.round(profit);
    if(incentives[0]<=10000)
    {
        incentives[0]=temp;
    }
    res.render('MYVIEWS/postcalc',{
        pagetitle:'INCENTIVES',
        INCENT:incentives,
        PROFIT:rounded,
        GOOD:boolgood,
        BAD:boolbad,
        content:message

    })
}
