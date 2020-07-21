const connection = require('../database/connection');
const generateUniqueId = require ('../utils/GenerateUniqueId')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf, type } = request.body;
        const id = generateUniqueId;

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
            type,
        });
        return response.json({ id });
    },

    async byType(request, response){
        const {type} = request.params;
        //console.log(type);
        const ongs = await connection('ongs').where('type', type);
        return response.json(ongs);
    }
}