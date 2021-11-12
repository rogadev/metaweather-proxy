/* Get Target Element */
const target = document.getElementById('target')

/* Fetch Request to Backend */
fetch('/weather')
  .then((response) => response.json())
  .then((res) => {
    target.innerText = JSON.stringify(res)
  })
