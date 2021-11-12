const div = document.getElementById('data')

fetch('/weather')
  .then((response) => response.json())
  .then((res) => {
    div.innerText = JSON.stringify(res)
  })
