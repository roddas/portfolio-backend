module.exports = (request,response) =>
{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        next();
    }else
    {
        response.status(401).redirect('/');
    }
}