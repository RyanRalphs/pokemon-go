const app = require('../app')
const request = require('supertest')



describe('Getting all the Pokemon', () => {
    it('Has a landing page', async () => {
        await request(app).get('/').send().expect(200).then(({text}) => {
            expect(text).toBe('POGO CHECKER')
        })
    })

    it('Has a route for getting all pokemon', async () => {
        await request(app).get('/api/pokemon/all').send().expect(200).then(({_body})=>{
            
           expect(_body[1].name).toBe('Bulbasaur')
        })
    }) 

    it('Has a route for getting specific pokemon', async () => {
        await request(app).get('/api/pokemon/22').send().expect(200).then(({body: {name}}) => {
            expect(name).toBe('Fearow')
        })
    })
    
    it('Has a route for getting info on catching shinys', async () => { 
        await request(app).get('/api/pokemon/22/shiny').send().expect(200).then(({body: {found_egg, found_evolution, found_photobomb, found_raid, found_research, found_wild, id, name}}) => {
            expect(found_egg).toBe(false)
            expect(name).toBe('Fearow')
        })
    })
})   