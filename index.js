//? Продавец манго
const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anij", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

//Проверка на продавца манго
function checkMango(name) {
  return name.at(name.length - 1) === "m" ? true : false;
}

// Функция поиска в ширину
function bfs(graph, start) {
  const visited = {}; // объект для отслеживания посещенных вершин
  const queue = [start]; // очередь для обхода вершин
  const result = []; // массив для хранения результатов обхода

  visited[start] = true; // помечаем стартовую вершину как посещенную

  while (queue.length) {
    const current = queue.shift(); // извлекаем вершину из очереди
    result.push(current); // добавляем её в результат

    if (checkMango(current)) console.log(`This is ${current}!`);

    // Перебираем смежные вершины
    for (const ind in graph[current]) {
      if (!visited[graph[current][ind]]) {
        // если вершина не была посещена
        visited[graph[current][ind]] = true; // помечаем её как посещенную
        queue.push(graph[current][ind]); // добавляем в очередь для дальнейшего обхода
      }
    }
  }

  return result; // возвращаем результат обхода
}

// Пример использования
console.log(bfs(graph, "you"));
