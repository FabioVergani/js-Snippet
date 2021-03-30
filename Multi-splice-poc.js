const m = [
  { id: 1 },
  { id: 2 },
  { id: 30 },
  { id: 456 },
  { id: 2 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 456 },
  { id: 2 },
  { id: 30 },
  { id: 456 }
];

const idToRemove = [30, 2, 8, 156, 456];

console.clear();

for (let i = 0; i < m.length; ++i) {
  const id = m[i].id;
  console.log(id, m.length);
  if (idToRemove.includes(id)) {
    m.splice(i, 1);
    --i;
  }
}

console.log(m);
