"use strict"

$(document).ready(function() {
    console.log("Ready to fetch GitHub User Repo!");
    userSubmit();
  });

function userSubmit () {
    $('#js-form').submit(event => {
        event.preventDefault();
        console.log("It's working");
        getRepos(userInput);
    })
}

function userInput() {
    let handle = $('#js-search-handle').val();
    return handle;
    console.log(handle);
}

function getRepos () {
    console.log("it's working even more!")
    const url = "https://api.github.com/users/:username/repos"
    fetch("https://api.github.com/users/" + userInput() + "/repos")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('#display-results').empty();
    for (let i = 0; i < responseJson.length; i++){
        $('#display-results').append(`
        <div class="result-container">
            <h2 class="handle">${responseJson[i].owner.login}</h2>
            <h3 class="repo">${responseJson[i].name}</h3>
            <a class="link" href="${responseJson[i].html_url}" target="_blank">See the Repo</a>
        </div>`
        )};
    $('.results-container').removeClass('hidden');
}
