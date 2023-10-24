/**
 * @jest-environment jsdom
 */
const { TestScheduler } = require('jest');
const buttonClick = require('../button');

beforeEach(()=>{
    document.body.innerHTML="<p id='par' ></p>";
});

describe("Dom tests",()=>{
    test('expects p contents to change',()=>{
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
})