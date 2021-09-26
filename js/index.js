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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in

    window.location.replace("home/");
  }
});

function signIn() {
  // Will NOT work when run in a local file
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}