const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');


get_joke.addEventListener('click', generatJoke);
  generatJoke();
 async function generatJoke(){
//   call icanhaz API
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers:{
      'Accept': 'application/json' 
    }
  });
  
  const joke = await jokeRes.json();
  
  console.log(joke);
//   set the new joke\
   jokeEl.innerHTML = joke.joke;
}