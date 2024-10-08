//? Алгоритм Дейкстры Dijkstra's algorithm
// работает только с направленными ациклическими графами DAG (Directed Acyclic Graph)
// НЕ работает, если есть ребра с отрицательным весом
const graph = {
  start: { a: 6, b: 2 },
  a: { end: 1 },
  b: { a: 3, end: 5 },
  end: { a: 1, b: 5 },
};

function dijkstra(graph, start, end) {
  const costs = {}; //стоимость всех узлов от начального
  const parents = {}; //таблица родителей
  const processed = new Set(); //обработан узел или нет

  //подготовка =================================
  for (const temp in graph) {
    if (temp != start) {
      costs[temp] = Infinity;
    } else {
      costs[temp] = 0;
    }
  }

  while (!processed.has(end)) {
    let lowestDistance = Infinity;
    let node = null;

    for (const temp in costs) {
      if (lowestDistance > costs[temp] && !processed.has(temp)) {
        lowestDistance = costs[temp];
        node = temp;
      }
    }

    const neighbours = graph[node]; // объект с соседями наименьшей вершины
    for (const temp in neighbours) {
      const newDistance = neighbours[temp] + costs[node];
      if (newDistance < costs[temp]) {
        costs[temp] = newDistance;
        parents[temp] = node;
      }
    }

    processed.add(node);
  } //while

  const short = [];
  let current = end;
  while (current !== start) {
    short.unshift(current);
    current = parents[current];
  }
  short.unshift(start);
  console.log(costs);
  return short;
  //============================================
}

console.log(dijkstra(graph, "start", "end"));
