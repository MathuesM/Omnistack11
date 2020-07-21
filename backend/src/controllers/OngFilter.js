const connection = require('../database/connection');

module.exports = {
    async byType(request, response){
        const {type} = request.params;
        //console.log(type);
        const ongs = await connection('ongs').where('type', type);
        return response.json(ongs);
    }
}