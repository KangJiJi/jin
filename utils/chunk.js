export const createChunkList = (list, chunkSize) => {
  const chunkedList = [];
  const listCopy = list.map((v) => v).sort(() => Math.random() - 0.5);
  for (let i = 0; i < listCopy.length; i += chunkSize) {
    chunkedList.push(listCopy.slice(i, i + chunkSize));
  }
  return chunkedList;
};

export const createTwoChunkList = (list) => {
  return createChunkList(list, 2);
};
