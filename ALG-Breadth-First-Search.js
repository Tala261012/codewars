//? Поиск в ширину, образец =============================================
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// Функция поиска в ширину
function bfs(graph, start) {
  const visited = {}; // объект для отслеживания посещенных вершин
  const queue = [start]; // очередь для обхода вершин
  const result = []; // массив для хранения результатов обхода

  visited[start] = true; // помечаем стартовую вершину как посещенную

  while (queue.length) {
    const current = queue.shift(); // извлекаем вершину из очереди
    result.push(current); // добавляем её в результат

    // Перебираем смежные вершины
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        // если вершина не была посещена
        visited[neighbor] = true; // помечаем её как посещенную
        queue.push(neighbor); // добавляем в очередь для дальнейшего обхода
      }
    }
  }

  return result; // возвращаем результат обхода
}

// Пример использования
console.log(bfs(graph, "A")); // ['A', 'B', 'C', 'D', 'E', 'F']
// =======================================================================

//? Продавец манго =======================================================
const graph2 = {
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
function bfs2(graph, start) {
  const visited = {}; // объект для отслеживания посещенных вершин
  const queue = [start]; // очередь для обхода вершин
  const result = []; // массив для хранения результатов обхода

  visited[start] = true; // помечаем стартовую вершину как посещенную

  while (queue.length) {
    const current = queue.shift(); // извлекаем вершину из очереди
    result.push(current); // добавляем её в результат

    if (checkMango(current)) {
      console.log(`This is ${current}!`);
      break; // не продолжать, если продавец манго найден
    }

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
console.log(bfs2(graph2, "you"));
// =======================================================================

//? Обход тупо всех вершин ====================================================
const graph3 = {
  kharkov: ["chuguev", "merefa"],
  chuguev: ["balakleya"],
  merefa: ["zmiyov", "pervomayskiy", "krasnopavlovka"],
  zmiyov: ["balakleya"],
  pervomayskiy: ["balakleya"],
  balakleya: ["izum"],
  krasnopavlovka: ["mechebilovo"],
  mechebilovo: ["kamishevaha", "xyz"],
  kamishevaha: ["izum"],
  izum: [],
  xyz: [],
};

function bfs3(graph, start) {
  const visited = {}; // Объект для хранения посещенных вершин
  const queue = [start]; // Очередь для обхода
  const result = []; // Массив для хранения порядка посещения вершин

  visited[start] = true; // Помечаем стартовую вершину как посещенную

  while (queue.length) {
    const current = queue.shift(); // Извлекаем вершину из очереди
    result.push(current); // Добавляем текущую вершину в результат

    // Перебираем всех соседей текущей вершины
    for (const ind in graph[current]) {
      if (!visited[graph[current][ind]]) {
        // Если сосед ещё не был посещен
        visited[graph[current][ind]] = true; // Помечаем его как посещенного
        queue.push(graph[current][ind]); // Добавляем его в очередь для дальнейшего обхода
      }
    }
  }

  return result; // Возвращаем массив с порядком обхода
}

// Запуск поиска
const startNode = "kharkov";
const result = bfs3(graph3, startNode);

console.log("Порядок посещения вершин:", result);
// =======================================================================

//? Кратчайшее расстояние до izum в числах ===============================
// graph3
function bfs4(graph, start, target) {
  const visited = {}; // Объект для хранения посещенных вершин
  const distances = {}; // Объект для хранения расстояний до каждой вершины
  const queue = [start]; // Очередь для обхода

  visited[start] = true; // Помечаем стартовую вершину как посещенную
  distances[start] = 0; //TODO Расстояние до стартовой вершины = 0

  while (queue.length) {
    const current = queue.shift(); // Извлекаем вершину из очереди

    // Если мы достигли целевой вершины, возвращаем расстояние до нее
    if (current === target) {
      return distances[current];
    }

    // Перебираем всех соседей текущей вершины
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        // Если сосед ещё не был посещен
        visited[neighbor] = true; // Помечаем его как посещенного
        distances[neighbor] = distances[current] + 1; // Увеличиваем расстояние на 1
        queue.push(neighbor); // Добавляем его в очередь для дальнейшего обхода
      }
    }
  }

  // Если целевая вершина недостижима, возвращаем -1
  return -1;
}

// Запуск поиска минимального количества шагов до 'izum'
const startNd = "kharkov";
const targetNd = "izum";
const steps = bfs4(graph, startNd, targetNd);

console.log(`Минимальное количество шагов до '${targetNd}':`, steps);
// =======================================================================
