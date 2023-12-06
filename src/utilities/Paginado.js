const Paginado = (page, limit, products) => {
  const currentPage = page ? parseInt(page) : 1;

  const limitPage = limit ? parseInt(limit) : 12;

  const baseUrl = "http://localhost:3005/Inventario";

  let previousPage = "";

  if (currentPage !== 1) {
    previousPage = `${baseUrl}?page=${Math.max(1, currentPage - 1)}&limit=${limit}`;
  } else {
    previousPage = null;
  }

  const totalItems = products;

  const totalPages = Math.ceil(totalItems / limit);

  let nextPage = null;

  if (currentPage < totalPages) {
    nextPage = `${baseUrl}?page=${currentPage + 1}&limit=${limit}`;
  }
  const resultado = {
    previousPage,
    nextPage,
    limitPage,
    currentPage,
  };

  return resultado;
};

module.exports = Paginado;
