let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.githubи.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map((url) => fetch(url));

console.log(requests);
Promise.allSettled(requests)
  .then((responses) =>
    responses.forEach((response, num) => {
      if (response.status == "fulfilled") {
        console.log(`${num}: ${response.value.status}`);
      }
      if (response.status == "rejected") {
        console.log(`${num}: ${response.reason}`);
      }
    })
  )
  .catch(console.log);
