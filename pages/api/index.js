function Api(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ api: 'bora-ali' }))
}

export default Api;