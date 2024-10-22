//? Алгоритм Дейкстры Dijkstra's algorithm
// Пример из книги, истрия одного обмена (book --> piano), стр 160
const graph = {
  book: { disc: 5, poster: 0 },
  disc: { guitar: 15, drum: 20 },
  guitar: { piano: 20 },
  drum: { piano: 10 },
  poster: { guitar: 30, drum: 35 },
  piano: null,
};

function exchange(graph, start, end) {
  const distances = {};
  const visited = new Set();
  const path = {};

  // заполняем объект с расстояниями
  for (const key in graph) {
    if (key !== start) {
      distances[key] = Infinity;
    } else {
      distances[start] = 0;
    }
  }

  while (!visited.has(end)) {
    let lowestDistance = Infinity;
    let node = null;

    for (const key in distances) {
      if (lowestDistance > distances[key] && !visited.has(key)) {
        lowestDistance = distances[key];
        node = key;
      }
    }

    const neighbors = graph[node];
    for (const key in neighbors) {
      const newDistance = distances[node] + neighbors[key];
      if (newDistance < distances[key]) {
        distances[key] = newDistance;
        // сохраняем название родительской вершины
        path[key] = node;
      }
    }

    visited.add(node);
  } // while

  //формируем кратчайший путь с названиями
  const shortPath = [];
  let current = end; // название конечной точки
  while (current !== start) {
    shortPath.unshift(current);
    current = path[current];
  }
  shortPath.unshift(start);

  return { shortest: distances[end], shortPath };
}

console.log(exchange(graph, "book", "piano"));
