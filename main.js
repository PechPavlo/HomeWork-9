"use strict";

let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers,6];
console.log(newNumbers);
numbers[5] = 0;
newNumbers = [...numbers,6];
console.log(newNumbers);
console.log(numbers);


function loadDocMethod1() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(comment => getTen(comment,1))
    };

async function loadDocMethod2() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    let comment = await response.json();
    getTen(comment,2);
    };

function getTen(param,method) {
    console.log('param',param);
    console.log(param.length);
    let commentPageCount = 0;
    let ourTen = [];
    let results = document.querySelector(`#results${method}`);
    console.log(results)
    document.querySelector(`#page-number${method}`).innerHTML = `Page ${commentPageCount/10 + 1}`;
    for (let i = commentPageCount; i < commentPageCount +10; i++) {
        ourTen.push(`<br>${i+1}.<br> <strong>email - </strong> ${param[i].email} <br> <strong> name - </strong>
        ${param[i].name}<br><strong> comment - </strong> "${param[i].body}"`)
    results.innerHTML = ourTen ;
};
let nextButton = document.querySelector(`#next${method}`);
nextButton.addEventListener('click',() => {
    if (commentPageCount < param.length - 10 ) {
    commentPageCount += 10;
    ourTen.splice(0,10);
    document.querySelector(`#page-number${method}`).innerHTML = `Page ${commentPageCount/10 + 1}`;
    for (let i = commentPageCount; i < commentPageCount +10; i++) {
        ourTen.push(`<br>${i+1}.<br> <strong>email - </strong> ${param[i].email} <br> <strong> name - </strong>
         ${param[i].name} <br><strong> comment - </strong> "${param[i].body}"`)
        results.innerHTML = ourTen ;
    };}else{
    document.querySelector(`#page-number${method}`).innerHTML = `This was the last page`;}
    } )
  };


let beginButton1 = document.querySelector('#begin1');
let beginButton2 = document.querySelector('#begin2');
let ourSolve1 = document.querySelector(".solve1");
let ourSolve2 = document.querySelector(".solve2");

beginButton1.addEventListener('click', () => {
    ourSolve1.style.display = "block";
    loadDocMethod1();
    });

beginButton2.addEventListener('click', () => {
    ourSolve2.style.display = "block";
    loadDocMethod2();
    });
