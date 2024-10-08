//? Алгоритм Дейкстры Dijkstra's algorithm
// работает только с направленными ациклическими графами DAG (Directed Acyclic Graph)
// НЕ работает, если есть ребра с отрицательным весом
const graph = {
  start: { a: 6, b: 2 },
  a: { end: 1 },
  b: { a: 3, end: 5 },
  end: {},
};

function dijkstra(graph, start, target) {
  const costs = {}; //стоимость всех узлов от начального
  const parents = {}; //таблица родителей
  const processed = []; //массив обработанных узлов

  //подготовка =================================
  for (const temp in start) {
    costs[temp] = start[temp];
    parents[temp] = "start";
  }

  costs.end = Infinity;
  parents.in = null;

  console.log(costs);
  console.log(parents);
  //============================================
}

console.log(dijkstra(graph, graph.start, graph.end));
