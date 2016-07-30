#!/usr/bin/node

/**
 *
 * Timer for tea or mate time! Displays in system notifier
 * Author: Andrrr
 * Usage: $ node timer.js [args]
 * Arguments: [time in minutes] [message when timer finished] 
 * Example: $node timer.js 0.5 "Finished after 30 seconds!"
 * TODO: Use custom icons
 * 
 */

'use strict';

let notifier = require('node-notifier');
let path	 = require('path');

// default: 300000 (5 minutos)
var time 	= process.argv[2] || 5;
var time_message = '';

// default: 'Se terminó el tiempo.'
var message = process.argv[3] || 'Se terminó el tiempo.';

// default: 'minutos'
var unit	= 'minutos';

if ( time < 1 ) {
	time_message = parseInt( time * 100 );
	time = parseInt( time * 100000 );
	unit = 'segundos';
} else {
	time_message = parseInt( time );
	time = parseInt( time ) * 60000;
}

// Mensaje anunciando que comenzó el conteo
notifier.notify({
	title: 'Contando... ', 
	message: '(' + time_message + ' ' + unit + ')',
	icon: path.join(__dirname, 'img/pava-calentando.png'),
	wait: false
});

// Mensaje anunciando que terminó el conteo
let timer = setTimeout(function(){
	notifier.notify({
		title: '¡Listo!',
		message: message,
		icon: path.join(__dirname, 'img/pava-hirviendo.png'),
		sound: true,
		wait: false
	}) 
}, time);
