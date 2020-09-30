import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


document.getElementById('contactForm').addEventListener("submit", function(e) {
	e.preventDefault();

	var erreur;
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var message = document.getElementById("message");

	if (!name.value) {
		erreur = "veuiller indiquer votre nom";
	}

	if (!email.value) {
		erreur = "veuiller indiquer votre email";
	}

	if (!phone.value) {
		erreur = "veuiller indiquer votre numero de telephone";
	}

	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;

	} else {
		alert('Message envoyer !!!');
	}
	
});
