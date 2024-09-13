//Все перестановки
//====================================================================================
function moveIt(arr) {
  const result = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]); // Добавляем копию текущей перестановки в результат
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current.concat(remaining[i]);
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(newCurrent, newRemaining);
    }
  }

  permute([], arr);

  return result;
}
//=================================================================================
