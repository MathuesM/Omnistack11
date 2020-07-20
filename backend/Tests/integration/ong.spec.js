const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            id: "ef5549fd",
            name: "APAD",
            email: "papa@apa.com",
            whatsapp: "77777777777",
            city: "Campinas",
            uf: "SP",
            type: "Animal"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLenght(8);
    });
});