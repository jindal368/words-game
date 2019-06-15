Notification.requestPermission(function() {
if (Notification.permission === 'granted') {
// user approved.
// use of new Notification(...) syntax will now be successful
} else if (Notification.permission === 'denied') {
// user denied.
} else { // Notification.permission === 'default'
// user didn’t make a decision.
// You can’t send notifications until they grant permission.
}
});
new Notification('Hello', { body: 'Hello, world!', icon: 'url to an .ico image' });
let notification = new Notification(title, options);
setTimeout(() => {
notification.close()
}, 4000
