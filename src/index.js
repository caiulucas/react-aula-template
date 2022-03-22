import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

const user1 = {
  name: 'Caio Lucas',
  surname: 'Pereira da Silva',
  image: 'https://github.com/caiulucas.png'
}

const user2 = {
  name: 'Anne',
  surname: 'Afro Academy',
  image: 'https://github.com/rafaballerini.png'
}

const element = (
  <div>
    <Welcome user={user1} />
    <Welcome user={user2} />
  </div>
)

ReactDOM.render(element, document.getElementById('root'));

// function concat(user) {
//   return user.name + ' ' + user.surname;
// }

// function clock() {
//   const date = new Date();

//   const element = (
//     <div>
//       <h1>Olá, {concat(user)}</h1>
//       <h2>{date.toLocaleTimeString()}</h2>
//       <img src={user.image} height={200} />;
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(clock, 1000);