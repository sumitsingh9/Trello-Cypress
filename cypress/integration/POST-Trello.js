///<reference types="cypress"/>

describe('desc', () => {
    var KEY = "ed08f8deb686a0f5acdbcaf9e85e2724"
    var ID;
    var TOKEN="ATTAf6faeb5fa84ff057fa456b5bb4100542834c574ab82425409bd61ce104672ba8A9794B77"

    it('create a board', () => {
        cy.request({
            method: "POST",
            url: 'https://api.trello.com/1/boards/',
            qs: {
                name: "created",
                key: KEY,
                token: TOKEN
            }
        }).then((res)=>{
            cy.log(res)
            ID=res.body.id
        })
    });

    it('get a board', () => {
        cy.request({
            method: "get",
            url:'https://api.trello.com/1/boards/'+ID,
            qs: {
                id: ID,
                key: KEY,
                token: TOKEN
            }
        }).then((res)=>{
            cy.log(res.body)
        })
    });
    
    it('update a board', () => {
        cy.request({
            method: "put",
            url: 'https://api.trello.com/1/boards/'+ID,
            qs: {
                key: KEY,
                token: TOKEN,
                name: "changed"
            }
        }).then((res)=>{
            cy.log(res.body)
        })
    });

    it('delete a board', () => {
        cy.request({
            method: "delete",
            url: 'https://api.trello.com/1/boards/'+ID,
            qs:{
                key: KEY,
                token: TOKEN,
            }
        }).then((res)=>{
            cy.log(res.body)
        })
    });
    
});