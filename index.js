/* Required External Modules
 */
const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

/**
 * App Variables
 */
const app=express();
const port=process.env.port || 4000;
/**
 *  App Configuration יצירת 
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
/**
 * Routes Definitions יצירת הראוטניג
 */
app.get('/',(req,res)=>{
res.render("index")
})
app.route('/user')
    .get((req,res)=>{
       res.render('notfound')
    })
    .post((req,res)=>{
        res.render("user",
        {
        user:{
            name:req.body.first_name,
            lastName:req.body.last_Name
             }
        })
    })/**
 * Server Activation הרצת השרת
 */
app.listen(port)