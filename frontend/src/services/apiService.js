// API service for handling all backend communications
const API_BASE_URL = 'http://localhost';

const operations = ['suma', 'resta', 'multiplicacion', 'division'];
const paramTypes = ['body', 'query', 'path'];

const ports = {
  suma: { body: 3001, query: 3002, path: 3003 },
  resta: { body: 4001, query: 4002, path: 4003 },
  multiplicacion: { body: 5001, query: 5002, path: 5003 },
  division: { body: 6001, query: 6002, path: 6003 },
};

export const getPort = (operation, paramType) => {
  return ports[operation][paramType];
};

export const buildApiUrl = (operation, paramType, num1 = null, num2 = null, id = null) => {
  const port = getPort(operation, paramType);
  let url = `${API_BASE_URL}:${port}/api/${operation}/${paramType}`;

  if (id) {
    url += `/${id}`;
  }

  if (paramType === 'query' && num1 !== null && num2 !== null) {
    url += `?numero1=${num1}&numero2=${num2}`;
  } else if (paramType === 'path' && num1 !== null && num2 !== null) {
    url += `/${num1}/${num2}`;
  }

  return url;
};

export const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const calculateOperation = async (operation, paramType, num1, num2) => {
  const url = buildApiUrl(operation, paramType, num1, num2);
  let options = { method: 'POST' };

  if (paramType === 'body') {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify({ numero1: parseFloat(num1), numero2: parseFloat(num2) });
  } else if (paramType === 'query') {
    // URL already includes query params
  } else if (paramType === 'path') {
    // URL already includes path params
  }

  return await apiRequest(url, options);
};

export const fetchAllOperations = async () => {
  const allOperations = [];

  for (const op of operations) {
    for (const type of paramTypes) {
      try {
        const url = buildApiUrl(op, type);
        const data = await apiRequest(url);
        if (Array.isArray(data)) {
          const operationsWithMeta = data.map(item => ({
            ...item,
            operation: op,
            paramType: type
          }));
          allOperations.push(...operationsWithMeta);
        }
      } catch (error) {
        console.error(`Error fetching ${op}/${type}:`, error);
      }
    }
  }

  return allOperations;
};

export const updateOperation = async (operation, paramType, id, num1, num2) => {
  const url = buildApiUrl(operation, paramType, num1, num2, id);
  let options = { method: 'PUT' };

  if (paramType === 'body') {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify({ numero1: parseFloat(num1), numero2: parseFloat(num2) });
  } else if (paramType === 'query') {
    // URL already includes query params
  } else if (paramType === 'path') {
    // URL already includes path params
  }

  return await apiRequest(url, options);
};

export const deleteOperation = async (operation, paramType, id) => {
  const url = buildApiUrl(operation, paramType, null, null, id);
  return await apiRequest(url, { method: 'DELETE' });
};

export { operations, paramTypes };
