/**
 * @jest-environment jsdom
 */
const { TestScheduler } = require('jest');
const buttonClick = require('../button');

/* beforeEach(()=>{
    document.body.innerHTML="<p id='par' ></p>";
});
 */
//The second approach, then, is to load the  entire HTML page and attach it to the mock DOM. 
//for test more than one element   our >> 

beforeEach(()=>{
    let fs = require('fs'); // << node file handling module -read,write,modify
    let fileContents = fs.readFileSync('index.html','utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})


describe("Dom tests",()=>{
    test('expects p contents to change',()=>{
        buttonClick();

        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
    test('h1 element should exist ',() =>{
        expect(document.getElementsByTagName('h1').length).toBe(1);

        //expect(document.getElementsByTagName('h1')[0].innerHTML).toEqual('Jest Click Test');
    })
})