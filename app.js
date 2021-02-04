fetch("text.txt")
  .then((result) => result.text())
  .then(txt => {
      document.querySelector('.text').innerHTML = txt;
  })
  .catch((err) => console.log(err));
