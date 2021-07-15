module.exports = (request,response,next) =>
{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) && request.session.token !== undefined)
    {
        console.log('ok');
        next();
    }else
    {
        response.status(401).redirect('/');
    }
}