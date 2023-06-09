const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

// / means home route
// after , we have call backs
app.get("/", (req, res) =>{
    res.status(200).send("<h1>Hello, This is venkat!!!</h1>");
});


// here we are versioning it
// like if we want to update we work on new versions
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "Venkat#$213$__",
        followers: 1000,
        follows: 10,
        data: format.asString(" dd[MM] - hh:mm", new Date()),
    };


    // we can write like this also
    // res.status(200).json({key : val});

    // here we are sending json data so used json
    
    res.status(200).json(instaSocial);
    
    // res.status(200).json({
    //     username: "Venkat#$213$__",
    //     followers: 1000,
    //     follows: 10,
    //     data: Date.now(),
    // });

});

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        username: "Venkat@1234_2",
        followers: 665,
        follows: 78,
        data: format.asString(" dd[MM] - hh:mm", new Date()),
    };

    // here we are sending json data so used json
    
    res.status(200).json(facebookSocial);

});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        username: "Venkat Adithya",
        followers: 200,
        follows: 100,
        data: format.asString(" dd-MM-yyyy -> hh:mm:ss", new Date()),
    };

    
    res.status(200).json(linkedinSocial);

});



// req.path gives path like v1/venkat gives "/venkat" we can use jsavascipt to remove / and return it
// req.query gives that is present after question mark
// req.params gives exactly after the route / like v1/venkat to venkat

// /: id/token anything you can keep
// here colon is important without colon it doesn.t work
// we can have lot of parameters like /api/v1/:token/:id

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});


// https://lco.dev/token?price=30
//         before is route/parameter ? after is query