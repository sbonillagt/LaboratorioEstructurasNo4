let rutas = [{
    method: 'GET',
    path:'/serieUno/{id?}', 
    handler: function (request, reply) {
        if(request.params.id)
            console.log(request.params.id);
        else
            console.log('not param found');
        return reply({
             status: 200, 
             data: {
                hello: "world "
            }
        });
    }
}, {
    method: 'POST',
    path:'/serieUno', 
    handler: function (request, reply) {
        return reply({
             status: 200, 
             data: {
                hello: "world"
            }
        });
    }
}, {
    method: 'PUT',
    path:'/serieUno', 
    handler: function (request, reply) {
        return reply({
             status: 200, 
             data: {
                hello: "world"
            }
        });
    }
}, {
    method: 'DELETE',
    path:'/serieUno', 
    handler: function (request, reply) {
        return reply({
             status: 200, 
             data: {
                hello: "world"
            }
        });
    }
}];

module.exports = rutas;