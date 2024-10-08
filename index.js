//? Алгоритм Дейкстры Dijkstra's algorithm
// Вывести кратчайший путь  из точки А в точку Б со значениями расстояний до каждой точки
const graph = {
  a: { b: 2, c: 1, i: 3 },
  b: { a: 2, d: 3 },
  c: { a: 1, d: 1 },
  d: { b: 3, c: 1, e: 5 },
  e: { d: 5, i: 2 },
  i: { a: 3, e: 2 },
};

function allShortPathWithDistances(graph, start, end) {
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
    const currentWithDistance = { [current]: distances[current] }; //!
    shortPath.unshift(currentWithDistance);
    current = path[current];
  }
  shortPath.unshift({ [start]: 0 });

  console.log(shortPath);
  return distances;
}

console.log(allShortPathWithDistances(graph, "a", "e"));
