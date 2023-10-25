const { TestScheduler } = require('jest');
const bclicked = require('../button2');

beforeEach(()=>{
    document.body.innerHTML = "<p id='par' ></p>";
})


describe("DOM test ",()=>{
    test("expect p content to change",()=>{
        bclicked();
        expect(document.getElementById("par").innerHTML ).toEqual("You clicked");

    })
});