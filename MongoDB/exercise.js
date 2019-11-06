const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/exercise-basic", {
        //playground DB
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB에 연결 되었습니다!"))
    .catch(error => console.error(error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    data: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { type: Number, default: 10, max: 50 }
});

const Course = mongoose.model("courses", courseSchema);
// Course.find().then(res => console.log(res));

// 실습 1
async function read() {
    const course = await Course.find({ tags: { $in: ["backend"] } }).sort('name').select('name author');
    console.log('실습 1');
    console.log(course);

}

//실습 2
async function read2() {
    const course2 = await Course.find({ tags: { $in: ["backend", "frontend"] } }).sort('-price').select('name price');
    console.log('실습 2');
    console.log(course2);
}

// 실습 3
async function read3() {
    const course3 = await Course.find()
    .where('price').gte(15)
    .where('name')
    .regex(/js/i)
    console.log('실습 3');
    console.log(course3);
}


read();
read2();
read3();


