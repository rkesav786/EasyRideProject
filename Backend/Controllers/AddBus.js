// To  Adding A Data Model For AddBus Data's

 const AB = require("../Models/ABM");

module.exports = (req,res)=>{

let {Tname,From,To,Date,Stime,Etime,Rate,Water,Ac,Charge,Cctv,Television} = req.body


   AB.create(

{
    Tname:Tname,
    From:From,
    To:To,
    Date:Date,
    Stime:Stime,
    Etime:Etime,
    Rate:Rate,
    Water:Water,
    Ac:Ac,
    Charge:Charge,
    Cctv:Cctv,
    Television:Television
})
.then(()=>{
    console.log("Data Added To Our DataBase!");
})
.catch((e)=>{
    console.log("Failled To Added Data Into our DB!");
})

console.log(req.body);


    res.send("Bus added!")

}
