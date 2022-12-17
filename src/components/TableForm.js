import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

export default function TableForm({
  sno,
  setSno,
  description,
  setDescription,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !rate) {
      alert('Please fill all inputs');
    } else {
      const newItems = {
        id: uuidv4(),
        sno,
        description,
        quantity,
        rate,
        amount,
      };
      setSno('');
      setDescription('');
      setQuantity('');
      setRate('');
      setAmount('');
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * rate);
    };
    calculateAmount(amount);
  }, [amount, rate, quantity, setAmount]);

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll('.amount');
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === 'amount') {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setRate(editingRow.rate);
  };

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-16'>
          <label htmlFor='description'>Item description</label>
          <input
            type='text'
            name='description'
            id='description'
            placeholder='Item description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              type='text'
              name='quantity'
              id='quantity'
              placeholder='Quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='rate'>Rate</label>
            <input
              type='text'
              name='rate'
              id='rate'
              placeholder='rate'
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='amount'>Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type='submit'
          className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        >
          {isEditing ? 'Editing Row Item' : 'Add Table Item'}
        </button>
      </form>

      {/* Table items */}

      <table width='100%' className='mb-10'>
        <thead>
          <tr className='p-1'>
            <td className='font-bold'>#</td>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Rate</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        {list.map(({ id, sno, description, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td
                  style={{ textAlign: 'center', height: '40px', width: '10%' }}
                >
                  {' '}
                  {sno}{' '}
                </td>
                <td style={{ textAlign: 'left', height: '40px', width: '30%' }}>
                  {' '}
                  {description}{' '}
                </td>
                <td
                  style={{ textAlign: 'right', height: '40px', width: '10%' }}
                >
                  {' '}
                  {quantity}{' '}
                </td>
                <td
                  style={{ textAlign: 'right', height: '40px', width: '15%' }}
                >
                  {' '}
                  {rate}{' '}
                </td>
                <td
                  className='amount'
                  style={{ textAlign: 'right', height: '40px', width: '15%' }}
                >
                  {' '}
                  {amount}{' '}
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className='text-red-500 font-bold text-xl' />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className='text-green-500 font-bold text-xl' />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>
          Total: {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
