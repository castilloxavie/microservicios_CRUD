import { useState } from 'react';
import {
  calculateOperation,
  fetchAllOperations,
  updateOperation,
  deleteOperation,
  operations,
  paramTypes
} from '../services/apiService';

export const useCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('suma');
  const [paramType, setParamType] = useState('body');
  const [result, setResult] = useState(null);
  const [operationsList, setOperationsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (!num1 || !num2) return;
    setLoading(true);
    try {
      const data = await calculateOperation(operation, paramType, num1, num2);
      setResult(data);
      // Clear input fields after calculation
      setNum1('');
      setNum2('');
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Error en la operación' });
    }
    setLoading(false);
  };

  const handleFetchOperations = async () => {
    setLoading(true);
    try {
      const data = await fetchAllOperations();
      setOperationsList(data);
    } catch (error) {
      console.error('Error:', error);
      setOperationsList([]);
    }
    setLoading(false);
  };

  const handleUpdateOperation = async (op, newNum1, newNum2) => {
    setLoading(true);
    try {
      const data = await updateOperation(op.operation, op.paramType, op.id, newNum1, newNum2);
      setResult(data);
      await handleFetchOperations(); // Refresh list
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const handleDeleteOperation = async (op) => {
    setLoading(true);
    try {
      await deleteOperation(op.operation, op.paramType, op.id);
      await handleFetchOperations(); // Refresh list
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return {
    // State
    num1,
    num2,
    operation,
    paramType,
    result,
    operationsList,
    loading,
    operations,
    paramTypes,

    // Setters
    setNum1,
    setNum2,
    setOperation,
    setParamType,

    // Handlers
    handleCalculate,
    handleFetchOperations,
    handleUpdateOperation,
    handleDeleteOperation,
  };
};
