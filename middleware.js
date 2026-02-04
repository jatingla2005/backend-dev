middleware.js

export const mid1= (req,res,next)=>{
    console.log(req.method);
    console.log("This is middleware 1");
    next();
}

//validation
export const validationPost= (req,res,next)=>{
    let {name,city} = req.body;
        
        if(!name || !city){
            return res.status(400).send("Name and city are required fields");
        }
    next();
}