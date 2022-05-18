import * as messaging from "messaging";
import { me } from "companion";
import { settingsStorage } from "settings";


/**
 * Error communicating with clock
 */
messaging.peerSocket.onerror = (err) => {
  console.error(`Connection error with clock: ${err.code} - ${err.message}`);
}


/**
 * Opening communication with clock
 */
messaging.peerSocket.onopen = (evt) => {
  console.log(`Socket to clock is open`);
  sendMessage("COMPANION_UP");
}


/**
 * Listen for messages from clock
 */
messaging.peerSocket.onmessage = (evt) => {
  console.log(`Got message from clock: ${evt.data}`);

  const username = JSON.parse(settingsStorage.getItem("username")).name;
  const password = JSON.parse(settingsStorage.getItem("password")).name;

  loginBitraf(username, password);
}


function loginBitraf(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", username);
  urlencoded.append("password", password);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://bitraf-door-cloudflare-worker.mattis.workers.dev", requestOptions)
      .then(response => response.json())
      .then(function(data) {
        console.log('Data from relay: ' + JSON.stringify(data));
        sendMessage('OK')
      })
      .catch(function(error) {
        console.error(`Error in API call: ${error}`);
        sendMessage('ERROR');
      });
}


function sendMessage(obj) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(obj);
  }
}
