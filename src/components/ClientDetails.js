export default function ClientDetails({
  clientName,
  clientAddress1,
  clientAddress2,
  clientAddress3,
  clientAddress4,
  clientAddress5,
}) {
  return (
    <>
      <section className='mt-10'>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h2 className='font-bold text-1xl'>Onwords Smart Solution</h2>
          <h3>Pollachi, Coimbatore-642 005</h3>
          <h3>Tamil Nadu, INDIA</h3>
          <h3>Phone: +91 7708630275</h3>
          <h3>Email: info@onwords.in </h3>
          <h3>Web: www.onwords.in</h3>
        </div>
        <br />
        <p>Bill To : </p>
        <h2 className='text-xl uppercase font-bold mb-1'>{clientName}</h2>
        <p>{clientAddress1}</p>
        <p>{clientAddress2}</p>
        <p>{clientAddress3}</p>
        <p>{clientAddress4}</p>
        <p>{clientAddress5}</p>
      </section>
    </>
  );
}
