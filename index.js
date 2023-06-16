// Code your solutions in this file
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);
function writeCards(names = "Guadalupe,Ollie,Aki") {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

  }
  return thankYouMessages;
}
