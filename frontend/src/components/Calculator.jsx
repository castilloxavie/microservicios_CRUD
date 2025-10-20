import { useState } from 'react';
import './Calculator.css';
import { useCalculator } from '../hooks/useCalculator';
import { CALCULATOR_TITLE, ERROR_MESSAGES } from '../utils/constants';

const Calculator = () => {
  const {
    num1,
    num2,
    operation,
    paramType,
    result,
    operationsList,
    loading,
    operations,
    paramTypes,
    setNum1,
    setNum2,
    setOperation,
    setParamType,
    handleCalculate,
    handleFetchOperations,
    handleUpdateOperation,
    handleDeleteOperation,
  } = useCalculator();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [operationToUpdate, setOperationToUpdate] = useState(null);
  const [updateNum1, setUpdateNum1] = useState('');
  const [updateNum2, setUpdateNum2] = useState('');

  const openUpdateModal = (op) => {
    setOperationToUpdate(op);
    setUpdateNum1(op.numero1);
    setUpdateNum2(op.numero2);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setOperationToUpdate(null);
    setUpdateNum1('');
    setUpdateNum2('');
  };

  const performUpdate = async () => {
    if (!operationToUpdate || !updateNum1 || !updateNum2) return;
    await handleUpdateOperation(operationToUpdate, updateNum1, updateNum2);
    closeUpdateModal();
  };

  return (
    <div className="calculator">
      <h2>{CALCULATOR_TITLE}</h2>
      <div className="form-group">
        <label>Operación:</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          {operations.map(op => <option key={op} value={op}>{op.charAt(0).toUpperCase() + op.slice(1)}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Tipo de Parámetros:</label>
        <select value={paramType} onChange={(e) => setParamType(e.target.value)}>
          {paramTypes.map(type => <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Número 1:</label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Número 2:</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div className="buttons">
        <button onClick={handleCalculate} disabled={loading}>Calcular</button>
        <button onClick={handleFetchOperations} disabled={loading}>Ver Operaciones</button>
      </div>
      {result && (
        <div className="result">
          <h3>Resultado:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {operationsList.length > 0 && (
        <div className="operations-list">
          <h3>Operaciones Anteriores:</h3>
          <ul>
            {operationsList.map(op => (
              <li key={op.id}>
                ID: {op.id}, {op.numero1} {op.operation} {op.numero2} = {op.resultado}
                <button onClick={() => openUpdateModal(op)}>Actualizar</button>
                <button onClick={() => handleDeleteOperation(op)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showUpdateModal && operationToUpdate && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Actualizar Operación</h3>
            <div className="form-group">
              <label>Número 1:</label>
              <input
                type="number"
                value={updateNum1}
                onChange={(e) => setUpdateNum1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Número 2:</label>
              <input
                type="number"
                value={updateNum2}
                onChange={(e) => setUpdateNum2(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={performUpdate} disabled={loading}>Actualizar</button>
              <button onClick={closeUpdateModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
