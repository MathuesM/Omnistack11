const generateUniqueId = require('../../src/utils/GenerateUniqueId');

describe('Generate Unique ID', ()=>{
    it('should gnerate an unique ID', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});