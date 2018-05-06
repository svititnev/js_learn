// session storage
let storageSession = window.sessionStorage;
let locStorage = window.localStorage;
// locStorage.setItem('deo', 'Mennen Speed Stick');
let deo = locStorage.getItem('deo');

if (deo == null) {
  alert('No deo');
} else {
  alert(deo);
}
