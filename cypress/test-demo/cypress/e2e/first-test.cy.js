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

describe('visits home page and checks the form', () =>{
    it('fills the form and submits', ()=>{
       cy.visit('http://localhost:5173/')
       cy.get('input[name="name"').type('Melrose')
       cy.get('input[name="email"').type("thisisatest@gmail.com")
       cy.get('form').submit()
       cy.contains('Thank you')
    })
})


describe('visits home page and clicks links', ()=>{
    it('clicks about component on home page', ()=>{
        cy.visit('http://localhost:5173/')
        cy.get('a[href="/about"').click()
        cy.url().should('include', '/about')
    })
})


describe('check element visibility', ()=>{
    it('makes sure nav is visible on the page', ()=>{
        cy.get('nav').should('be.visible')
    })
})