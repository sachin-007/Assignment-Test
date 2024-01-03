const validateNote = (req,res,next)=>{
    const {title,content} = req.body;

    if(!title||title.length>255||!content)
    {
        return res.status(400).send("Invalid input. Please provide valid title and content.");
    }
    next();
}

module.exports = {
    validateNote
}