export function fetchRandomCat() {
  return fetch('http://aws.random.cat/meow')
  .then(response => response.json())
  .then(json => json.file)
}
