let firstName = `Alice`
let gender = `Non-binaire`;
switch (gender) {
  case `Male`:
    console.log(`Bonjour ${firstName}, vous êtes entré sur le chan`);
    break;
  case `Female`:
    console.log(`Bonjour ${firstName}, vous êtes entrée sur le chan`)
    break;
  default:
    console.log(`Bonjour ${firstName}, vous êtes entré(e) sur le chan`);
}
