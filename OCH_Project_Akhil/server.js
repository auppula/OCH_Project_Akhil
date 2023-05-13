const mysql = require('mysql');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 9090;
const con= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Momdad1993!@',
 database: 'ochproject'
 });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//static  files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// set views
app.set('views','./views')
app.set('view engine','ejs')



app.get('/login' ,(req,res)=>{
    res.render('loginpage_OCH')
})

app.get('/management' ,(req,res)=>{
    res.render('mgmt')
})

app.get('/participants' ,(req,res)=>{
    res.render('participants')
})

app.get('/audience' ,(req,res)=>{
    res.render('audience')
})

app.get('/judge' ,(req,res)=>{
    res.render('judge')
})




// data base storing


app.post('/management',function(req,res){

    var competition_id = req.body.competition_id;
    var competition_Type = req.body.competition_Type;
    var competition_theme = req.body.competition_theme;
    var Competition_Start = req.body.Competition_Start;
    var competition_end = req.body.competition_end;
    var audience_rating_date = req.body.audience_rating_date;
    var judge_rating_date = req.body.judge_rating_date;
    var winners_declaration_date = req.body.winners_declaration_date;
    
    con.connect(function(error){
        if(error) throw error;
        
        var sql = "INSERT INTO   competitions(competition_id ,competition_Type,competition_theme,Competition_Start,competition_end,audience_rating_date,judge_rating_date,winners_declaration_date) VALUES(?,?,?,?,?,?,?,?)";
        con.query(sql,[competition_id ,competition_Type,competition_theme,Competition_Start,competition_end,audience_rating_date,judge_rating_date,winners_declaration_date],function(error,result){
        if(error) throw error;
        res.render('mgmt');
        next();
     })
    
    })
    }); 

app.listen(port,()=>{
    console.log("listening");
})