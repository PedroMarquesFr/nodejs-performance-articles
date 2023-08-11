
const express = require('express');

const app = express();

const items = [];
// Criando uma base de busca
for (let i = 1; i <= 100000; i++) {
  const item = {
    id: String(i),
    name: `Item ${i}`,
  };
  items.push(item);
}


// Rota GET para buscar um item no JSON
app.get('/search/:id', (req, res) => {
  const id = req.params.id;

  const foundItem = items.find((item) => item.id === id);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Rota GET para buscar um item no JSON
app.get('/binarySearch/:id', (req, res) => {
  const id = req.params.id;

   const foundItem = binarySearch(items, id);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Função de busca binária para encontrar um item no array
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].id === target) {
      return arr[mid];
    } else if (arr[mid].id < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return null;
}

// Inicie o servidor na porta 8000
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

