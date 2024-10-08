//? Алгоритм Дейкстры Dijkstra's algorithm
// работает только с направленными ациклическими графами DAG (Directed Acyclic Graph)
// НЕ работает, если есть ребра с отрицательным весом

//https://www.youtube.com/watch?v=8WCfY0Uh1iM ===================================
const graph = {
  a: { b: 2, c: 1, i: 3 },
  b: { a: 2, d: 3 },
  c: { a: 1, d: 1 },
  d: { b: 3, c: 1, e: 5 },
  e: { d: 5, i: 2 },
  i: { a: 3, e: 2 },
};

function dijkstra(graph, start, end) {
  const distances = {}; //расстояния от стартовой, стоимости
  const visited = new Set(); // список посещенных
  const path = {}; // история пути

  // заполняем объект с расстояниями
  for (const key in graph) {
    if (key !== start) {
      distances[key] = Infinity;
    } else {
      distances[start] = 0;
    }
  }

  while (!visited.has(end)) {
    let lowestDistance = Infinity; //наименьшее расстояние
    let node = null; //название вершины с наименьшим расстоянием

    // находим вершину с наименьшим рассстоянием и присваиваем в lowestDistance и node
    for (const key in distances) {
      if (lowestDistance > distances[key] && !visited.has(key)) {
        lowestDistance = distances[key];
        node = key;
      }
    }

    //объект с соседями вершины, у которой  наименьшее расстояние
    const neighbors = graph[node];
    for (const key in neighbors) {
      const newDistance = distances[node] + neighbors[key];
      if (newDistance < distances[key]) {
        distances[key] = newDistance;
        // сохраняем название родительской вершины
        path[key] = node;
      }
    }

    visited.add(node); //сохраняем в список посещенных вершин
  }

  // формируем кратчайший путь с названиями
  const shortPath = [];
  let current = end; // название конечной точки
  while (current !== start) {
    shortPath.unshift(current);
    current = path[current];
  }
  shortPath.unshift(start);

  return { path: shortPath, distance: distances[end] };
}

console.log(dijkstra(graph, "a", "e"));
//===========================================================================

// пример из книги по аналогии ==============================================
const graph2 = {
  start: { a: 6, b: 2 },
  a: { end: 1 },
  b: { a: 3, end: 5 },
  end: { a: 1, b: 5 },
};

function dijkstra2(graph, start, end) {
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

console.log(dijkstra2(graph2, "start", "end"));
//===========================================================================
