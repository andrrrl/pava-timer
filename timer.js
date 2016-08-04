#!/usr/bin/node

/**
 *
 * Timer for tea or mate time! or anything else. 
 * Displays system notification bubble
 * Author: Andrrr
 * 
 * Usage: $ node timer.js [time in minutes] [message on timer finish] 
 * Example: $ node timer.js 0.3 "Finished after 30 seconds!"
 * 
 */

'use strict';

let
    notifier = require('node-notifier'),
    path = require('path'),
    colors = require('colors');

const
    icon_start = 'img/pava-calentando.png',
    icon_end = 'img/pava-hirviendo.png';

var
	time = process.argv[2] || 5,
	message = process.argv[3] || 'Time\'s up!',
	unit = 'minutes',
	time_message = '';

if (time < 1) {
    time_message = parseInt(time * 100);
    time = parseInt(time * 100000);
    unit = 'seconds';
} else {
    time_message = parseInt(time);
    time = parseInt(time) * 60000;
}

// Define notification announcing that the counter started
var start_timer = {
    title: 'Counting...',
    message: '(' + time_message + ' ' + unit + ')',
    icon: path.join(__dirname, icon_start),
    wait: false
}

// Define notification announcing that the counter ended
var end_timer = {
    title: 'Done!',
    message: message,
    icon: path.join(__dirname, icon_end),
    sound: true,
    wait: false
}

// Show bubble notification (start)
notifier.notify(start_timer);

// Show console notification (start), for example, for use in CLI or SSH
console.log('+-------------------------+');
console.log(start_timer.title.red.bold);
console.log(start_timer.message.red);
console.log('+-------------------------+');

// Start timer
let timer = setTimeout(function() {

    // Show bubble notification (end)
    notifier.notify(end_timer);

    // Show console notification (end)
    console.log('+-------------------------+');
    console.log(end_timer.title.green.bold);
    console.log(end_timer.message.green);
    console.log('+-------------------------+');

}, time);