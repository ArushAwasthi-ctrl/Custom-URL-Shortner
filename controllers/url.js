const shortid = require('shortid')
const URL = require('../models/url-model.js');
const { error } = require('console');
async function handleShortUrl(req,res){
    if(!req.body || !req.body.URL)
    {
       return res.status(400).json({error:'Please provide a URL!'})
    }
    try {
        const shortUrl = shortid();
        await URL.create({
            shortUrl:shortUrl,
            originalUrL:req.body.URL,
            clickHistory:[]
        })
        return res.json({"Status":"success",
            id:shortUrl,
            originalUrl: req.body.URL
        })
    } catch (error) {
        console.error('Error creating short URL:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
async function handleShortnerRequest(req,res) {
    const id = req.params.id;
    if(!id)
    {
        return res.status(404).json({error: "Please provide an ID"});
    }
    try {
        const url = await URL.findOne({ shortUrl: id });
        if(!url)
        {
            return res.status(404).json({error: "URL not found in database"});
        }
        
        // Update click history
        url.clickHistory.push({ timeStamp: Date.now() });
        await url.save();
        
        // Redirect to original URL
        return res.redirect(url.originalUrL);
    } catch (error) {
        console.error('Error retrieving URL:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
async function handleAnalayticsbyId(req,res) {
    const url = URL.findOne({shortUrl:id});
    if(!url)
    {
        return res.json({error:"Cannot find url"});
    }
    return res.json({analaytics:`${res.clickHistory}`})
}
module.exports ={
    handleShortUrl,
    handleShortnerRequest
}