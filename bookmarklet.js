alert("hello");
var imported = document.createElement('script');
imported.src = 'https://kimroege.github.io/bookmarklet2.js';
document.head.appendChild(imported);


var jsc = document.createElement('script');
jsc.src = 'https://jsconsole.com/js/remote.js?e7c40c71-b2de-4bd5-a5cd-41242bb1c170';
document.head.appendChild(jsc);

console.log("test");
