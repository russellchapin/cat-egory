export function fetchRandomCat() {
  return fetch('https://aws.random.cat/meow')
  .then(response => response.json())
  .then(json => json.file)
}
