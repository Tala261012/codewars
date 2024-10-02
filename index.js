//? Кратчайшее расстояние до izum в числах и МАРШРУТ к ней
const graph = {
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

// Составление маршрута
function findPath(cities, target) {
  const result = [target];
  let tempcity = cities[target];

  while (tempcity) {
    result.push(tempcity);
    tempcity = cities[tempcity];
  }

  return result.reverse();
}

function bfs(graph, start, target) {
  const visited = {}; // Объект для хранения посещенных вершин
  const distances = {}; // Объект для хранения расстояний до каждой вершины
  const queue = [start]; // Очередь для обхода
  const predcity = {};

  visited[start] = true; // Помечаем стартовую вершину как посещенную
  distances[start] = 0; //* Расстояние до стартовой вершины = 0
  predcity[start] = null; //* объект с предыдущими вершинами для построения пути

  while (queue.length) {
    const current = queue.shift(); // Извлекаем вершину из очереди

    // Если мы достигли целевой вершины, возвращаем расстояние до нее
    if (current === target) {
      const path = findPath(predcity, target);
      return { steps: distances[current], path };
    }

    // Перебираем всех соседей текущей вершины
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        // Если сосед ещё не был посещен
        visited[neighbor] = true; // Помечаем его как посещенного
        distances[neighbor] = distances[current] + 1; // Увеличиваем расстояние на 1
        queue.push(neighbor); // Добавляем его в очередь для дальнейшего обхода
        predcity[neighbor] = current;

        console.log(predcity);
      }
    }
  }

  // Если целевая вершина недостижима, возвращаем -1
  return { steps: -1, path: "not found" };
}

// Запуск поиска минимального количества шагов до 'izum'
const startNode = "kharkov";
const targetNode = "izum";

console.log(bfs(graph, startNode, targetNode));
