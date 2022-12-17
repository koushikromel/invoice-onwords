import React from 'react';
import '../index.css';

export default function Table({ list, total }) {
  return (
    <>
      <table width='100%' className='mb-10' style={{ margin: 'auto' }}>
        <thead>
          <tr
            id='tabl'
            className=' p-1'
            style={{ backgroundColor: '#CF3C27', color: 'white' }}
          >
            <td
              className=''
              style={{ textAlign: 'center', height: '40px', width: '5%' }}
            >
              {' '}
              #{' '}
            </td>
            <td
              className=''
              style={{ textAlign: 'left', height: '40px', width: '55%' }}
            >
              {' '}
              Item & Description{' '}
            </td>
            <td
              className=''
              style={{ textAlign: 'right', height: '40px', width: '10%' }}
            >
              {' '}
              Qty{' '}
            </td>
            <td
              className=''
              style={{ textAlign: 'right', height: '40px', width: '10%' }}
            >
              {' '}
              Rate{' '}
            </td>
            <td
              className=''
              style={{ textAlign: 'center', height: '40px', width: '10%' }}
            >
              {' '}
              Amount{' '}
            </td>
          </tr>
        </thead>
        {list.map(({ id, sno, description, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}></td>
                <td style={{ textAlign: 'left' }}>{description}</td>
                <td style={{ textAlign: 'right' }}>{quantity}</td>
                <td style={{ textAlign: 'right' }}>{rate}</td>
                <td style={{ textAlign: 'right' }}>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className='text-right font-bold'>
          Sub
          Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;{' '}
          {total.toLocaleString()}
        </h2>
        <h2 className='float-left'>
          GSTIN : &nbsp;&nbsp;&nbsp;33BTUPN5784J1ZT
        </h2>
        <h2 className='text-right '>
          GST(18%)&nbsp;&nbsp;&nbsp;
          <input className='text-right' size='10' />
        </h2>
        <h2 className='text-right '>
          LABOUR & INSTALLATION&nbsp;&nbsp;&nbsp;
          <input className='text-right' size='10' />
        </h2>
        <h2 className='text-right font-bold'>
          Total&nbsp;&nbsp;&nbsp;
          <input className='text-right' size='10' />
        </h2>
        <h2 className='text-right font-bold'>
          Grand Total&nbsp;&nbsp;&nbsp;
          <input className='text-right' size='10' />
        </h2>
      </div>
    </>
  );
}
