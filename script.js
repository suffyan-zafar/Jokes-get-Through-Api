const joke=document.getElementById('jokes');
const jokeBtn=document.getElementById('jokesBtn');

jokeBtn.addEventListener('click',generateJoke );

function generateJoke() {
    const config= {
        headers : {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config ).then(res => res.json()).then(data => 
    joke.innerHTML=data.joke)
}
