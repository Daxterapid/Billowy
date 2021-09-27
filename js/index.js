/*async function handleTableSubmit(event) {
  event.preventDefault();

  const file = event.target.elements['table-upload'].files[0];
  if (!file) {
    uploadError('Please select a file.');
    return false;
  };

  readFileJSON(file)
    .then(response => {
      const table = JSON.parse(response);

      if (Object.keys(table).length === 0) {
        uploadError('Data is empty.');
        return;
      }

      $('#upload-error').attr('hidden', true);
      $('#error-details').attr('hidden', true);

      loadTable(table);
    })
    .catch(error => {
      uploadError('An error occured while reading the file.');

      $('#error-details').attr('hidden', false)
      $('#error-text').text(error.name + ': ' + error.message);
    });
}

function uploadError(message) {
  $('#upload-error').attr('hidden', false);
  $('#upload-error').text(message);
}

function readFileJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);

    reader.readAsText(file);
  });
}

function loadTable(object) {
  document.createElement('table');

  
}*/

/* To Do

redirect only after signing in
option to go to home when signed in
remove sign-in button when signed in
display "not signed in" message on homepage,
  unless user is signed in, then display content (or the other way?)
add gradients to css? (main page)

*/

// Set images for Google sign-in for hover and press events
$('#sign-in-google').attr('onmouseover', 'this.src="images/google_signin_focus.png"');
$('#sign-in-google').attr('onmouseout', 'this.src="images/google_signin_normal.png"');
$('#sign-in-google').attr('onmousedown', 'this.src="images/google_signin_pressed.png"');
$('#sign-in-google').attr('onmouseup', 'this.src="images/google_signin_focus.png"');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in (this can trigger *after* the user has signed in, or *if* they are signed in)

    window.location.replace("home/");
  } else {
    // User is signed out (ditto, but signed out)

    // Redirect to main page?
  }
});

function signInGoogle() {
  // Will NOT work when ran in a local file
  var provider = new firebase.auth.GoogleAuthProvider();
  var res = firebase.auth().signInWithPopup(provider);
}