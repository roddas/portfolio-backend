
export class ServerError
{
    internalServerError(error,response)
    {
        response.status(500).json({ status: 500, message: 'Internal Server Error' });
        console.log(error);
    }
}