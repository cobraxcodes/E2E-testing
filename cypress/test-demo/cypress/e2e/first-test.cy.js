// BASIC TESTS

describe('first e2e test', () =>{
    it('visits home page and checks the title', ()=>{
        cy.visit('http://localhost:5173/')
        cy.contains('Welcome to the Home page!')
    })
})

describe('home button test', ()=>{
    it('visit home button', ()=>{
        cy.visit('http://localhost:5173/')
        cy.get('button').contains('Learn More').click()
    })
})

describe('home input test', () =>{
    it('checks input', () =>{
        cy.visit('http://localhost:5173/')
        cy.get('input[name="homeInput"]').type('Hello world')
    })
})