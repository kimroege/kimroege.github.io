function handleUrl(url, sab, omg) {
  var omgurl="https://api.omgwtfnzbs.me/api?t=get&apikey=";
  var split=url.split('/');
  var nzbid=split[3].split('=');
  nzbid=nzbid[1];
  omgurl+=omg+"&id="+nzbid;
  omgurl=encodeURIComponent(omgurl);
  var saburl='https://192.168.0.183:8080/sabnzbd/api?mode=addurl&name='+omgurl+'&nzbname=&cat=*&script=Default&priority=-100&pp=-1&apikey='+sab;
  alert(saburl);
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function() {
    //alert("readyState: "+ xhr.readyState + " xhr.status: " + xhr.status);
  } 
  xhr.open("GET",saburl,true);
  xhr.send();
}



/*
var imported = document.createElement('script');
imported.src = 'https://kimroege.github.io/bookmarklet2.js';
document.head.appendChild(imported);
*/
