import companyLogo from '../img/onw.png';
// import { Row, Col, Container} from "react-bootstrap";

export default function Header({ handlePrint, invoiceNumber, invoiceDate }) {
  return (
    <>
      <div>
        <div style={{ float: 'left' }}>
          <img src={companyLogo} alt='Logo' style={{ width: '200px' }} />
        </div>
        <div style={{ float: 'right' }} className='ml-auto p-2 col-example'>
          {/* <select>
          <option ><h1 
          className=' uppercase  text-5xl font-roboto'>Quotation</h1></option>
          <option >Invoice</option>

          </select> */}
          <h1 className=' uppercase  text-5xl font-roboto' style={{color: '#CF3C27'}} >Quotation</h1>
          <div>
            <h1 style={{ float: 'right' }}>{invoiceNumber}</h1> <br />
            <label style={{ float: 'right' }}>
              Date : <span> {invoiceDate}</span>
            </label>
          </div>
        </div>
      </div>

     

      {/* <Container>
          <Row>
            <Col><img src={companyLogo} alt="Logo" style={{width:"200px", border:"2px solid black"}} /></Col>
            <Col><h1 className=" uppercase  text-2xl mb-1 ">
              Quotation
            </h1>
            <input type="text" style={{}} value="#" /><br />
            <label>Date:</label></Col>
          </Row>
        </Container> */}
      {/* <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            </li>
            <li>
              <button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
                Send
              </button>
            </li>
          </ul>
        </div> */}
    </>
  );
}
