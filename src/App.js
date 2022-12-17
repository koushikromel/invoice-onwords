import { useState, useRef } from 'react';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
// import MainDetails from './components/MainDetails';
// import Notes from "./components/Notes"
import Table from './components/Table';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [bankName, setBankName] = useState('');
  // const [bankAccount, setBankAccount] = useState('');
  // const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress1, setClientAddress1] = useState('');
  const [clientAddress2, setClientAddress2] = useState('');
  const [clientAddress3, setClientAddress3] = useState('');
  const [clientAddress4, setClientAddress4] = useState('');
  const [clientAddress5, setClientAddress5] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  // const [dueDate, setDueDate] = useState("")
  // const [notes, setNotes] = useState("")
  const [sno, setSno] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className='m-5 p-9 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className='bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className='p-5'>
              <Header
                handlePrint={handlePrint}
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
              />
              {/* <MainDetails name={name} address={address} /> */}
              <br />
              <ClientDetails
                clientName={clientName}
                clientAddress1={clientAddress1}
                clientAddress2={clientAddress2}
                clientAddress3={clientAddress3}
                clientAddress4={clientAddress4}
                clientAddress5={clientAddress5}
              />

              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                // dueDate={dueDate}
              />

              <Table
                sno={sno}
                description={description}
                quantity={quantity}
                rate={rate}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />

              {/* <Notes notes={notes} /> */}

              <Footer
              // name={name}
              // address={address}
              // website={website}
              // email={email}
              // phone={phone}
              // bankAccount={bankAccount}
              // bankName={bankName}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
            <div className='flex flex-col justify-center'>
              <article className='md:grid grid-cols-2 gap-10 md:mt-16'>
                <div className='flex flex-col'>
                  <label htmlFor='clientName'>Enter your client's name</label>
                  <input
                    type='text'
                    name='clientName'
                    id='clientName'
                    placeholder="Enter your client's name"
                    autoComplete='off'
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='clientAddress'>
                    Enter your client's address
                  </label>
                  <input
                    type='text'
                    name='clientAddress'
                    id='clientAddress'
                    placeholder="Enter your client's address1"
                    autoComplete='off'
                    value={clientAddress1}
                    onChange={(e) => setClientAddress1(e.target.value)}
                  />
                  <input
                    type='text'
                    name='clientAddress'
                    id='clientAddress'
                    placeholder="Enter your client's address2"
                    autoComplete='off'
                    value={clientAddress2}
                    onChange={(e) => setClientAddress2(e.target.value)}
                  />
                  <input
                    type='text'
                    name='clientAddress'
                    id='clientAddress'
                    placeholder="Enter your client's address3"
                    autoComplete='off'
                    value={clientAddress3}
                    onChange={(e) => setClientAddress3(e.target.value)}
                  />
                  <input
                    type='text'
                    name='clientAddress'
                    id='clientAddress'
                    placeholder="Enter your client's address4"
                    autoComplete='off'
                    value={clientAddress4}
                    onChange={(e) => setClientAddress4(e.target.value)}
                  />
                  <input
                    type='text'
                    name='clientAddress'
                    id='clientAddress'
                    placeholder="Enter your client's address5"
                    autoComplete='off'
                    value={clientAddress5}
                    onChange={(e) => setClientAddress5(e.target.value)}
                  />
                </div>
              </article>

              <article className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col '>
                  <label htmlFor='invoiceNumber'>Invoice Number</label>
                  <input
                    type='text'
                    placeholder='Invoice Number'
                    autoComplete='off'
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='invoiceDate'>Invoice Date</label>
                  <input
                    type='date'
                    name='invoiceDate'
                    id='invoiceDate'
                    placeholder='Invoice Date'
                    autoComplete='off'
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                {/* <div className='flex flex-col'>
                  <label htmlFor='dueDate'>Due Date</label>
                  <input
                    type='date'
                    name='dueDate'
                    id='dueDate'
                    placeholder='Invoice Date'
                    autoComplete='off'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div> */}
              </article>

              {/* This is our table form */}
              <article>
                <TableForm
                  sno={sno}
                  setSno={setSno}
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              {/* <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                // value={notes}
                // onChange={(e) => setNotes(e.target.value)}
              ></textarea> */}

              <button
                onClick={() => setShowInvoice(true)}
                className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
