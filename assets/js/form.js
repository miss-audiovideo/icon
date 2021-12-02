var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGxI0ybtamhHfXktObvJ95pBaXoLAogss",
  authDomain: "contact-3980d.firebaseapp.com",
  projectId: "contact-3980d",
  storageBucket: "contact-3980d.appspot.com",
  messagingSenderId: "524713322077",
  appId: "1:524713322077:web:5162003a4c2e72e1d14fb4",
});
firebase.initializeApp(config);

let messageRef = firebase.database().ref("contacts");

document.getElementById("email-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let email = getInputValue("email");
  let first = getInputValue("first");
  let last = getInputValue("last");
  let number = getInputValue("number");
  let comment = getInputValue("comment");
  let price = getInputValue("price");
  let service = getInputValue(
    "uxui" + "apps" + "tech" + "seo" + "smm" + "branding" + "webdesigning" + "photoshop" + "other"
  );

  saveMessage(first, last, email, number, comment, price, service);

  document.getElementById("form").reset();
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function saveMessage(first, last, email, number, comment, price, service) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    first: first,
    last: last,
    email: email,
    number: number,
    comment: comment,
    price: price,
    service: service,
  });
}
