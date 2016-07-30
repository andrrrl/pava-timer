# Node.js timer with system notification #

## Defaults ##
* timeout: 5 (minutes, can be a float: 0.5 = 30 seconds)

* message: "Time's up!"

Requirements:

```
// Global is optional, of course
$ npm install -g node-notifier
```

Usage:

```
 $ node timer.js [time in minutes] [message when timer finished] 
```

Example:

```
$ node timer.js 0.5 "Finished after 30 seconds!"
```