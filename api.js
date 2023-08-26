const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const port=3000
const cors = require('cors');

mongoose.connect("mongodb+srv://nishantpandey3910:Nishant!!!!@cluster0.xejetfu.mongodb.net/lifeatiitk")
const coursesSchema= new mongoose.Schema({
    name: String,
    title: String,
    description:String,
    image:String,
    key:Number,
    reviews:[{
        key:Number,
        ID:Number,
        Student:String,
        Prof:String,
        Year_and_Semester:String,
        Grading_Pattern:String,
        Workload:String,
        Difficulty:String,
        Teaching_Style:String,
        Satisfaction:String
    }]
})
const modreviewsSchema=new mongoose.Schema({
    key: Number,
    ID: Number,
    Student: String,  
    Prof: String,
    Year_and_Semester: String,
    Grading_Pattern: String,
    WorkLoad: String,
    Difficulty: String,
    Teaching_Style: String,
    Satisfaction: String
})

const Course=mongoose.model("courses",coursesSchema);
const Modreview=mongoose.model("modreviews",modreviewsSchema);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())      //to get data in json format from react frontend


app.get("/courses",async (req,res)=>{
    const courses= await Course.find();
    res.json(courses)
        
})
app.get("/modReviews",async (req,res)=>{
    const modReviews= await Modreview.find();
    res.json(modReviews)
        
})

app.post("/submitReview",(req,res)=>{
    console.log(req.body);
    const review=new Modreview({
        key: req.body.key,
        ID: req.body.ID,
        Student: req.body.Student,
        Prof: req.body.Prof,
        Year_and_Semester: req.body.Year_and_Semester,
        Grading_Pattern: req.body.Grading_Pattern,
        WorkLoad: req.body.Workload,
        Difficulty: req.body.Difficulty,
        Teaching_Style: req.body.Teaching_Style,
        Satisfaction: req.body.Satisfaction
    })
    review.save();
})

app.post("/approveReview",(req,res)=>{
    console.log(req.body);
    // console.log(req.body._id);
    const review={
        key: req.body.key,
        ID: req.body.ID,
        Student: req.body.Student,
        Prof: req.body.Prof,
        Year_and_Semester: req.body.Year_and_Semester,
        Grading_Pattern: req.body.Grading_Pattern,
        WorkLoad: req.body.Workload,
        Difficulty: req.body.Difficulty,
        Teaching_Style: req.body.Teaching_Style,
        Satisfaction: req.body.Satisfaction
    }
    Course.updateOne({key:review.key},{
        $push:{reviews:review}
    })
        .then(() => {
            res.send("Review approved successfully");
        })
        .catch((error) => {
            console.error("Error approving review:", error);
            res.status(500).send("Error approving review");
        });
})

app.delete("/rejectReview", (req, res) => {
    const id = req.query.ID; // Use lowercase 'id' here
    console.log(id);
    Modreview.deleteOne({ _id: id })
        .then(() => {
            res.send("Review rejected successfully");
        })
        .catch((error) => {
            console.error("Error rejecting review:", error);
            res.status(500).send("Error rejecting review");
        });
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})