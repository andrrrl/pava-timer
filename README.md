# Node.js timer with system notification #

### Defaults: ###
* timeout: 5 (minutes, can be a float: 0.3 = 30 seconds)

* message: "Time's up!"

### Requirements: ###

```
// Global is optional, of course
$ npm install node-notifier -g
```

### Usage: ###

```
 $ node timer.js [time in minutes] [message on timer finish] 
```

### Example: ###

```
$ node timer.js 0.3 "Finished after 30 seconds!"
```