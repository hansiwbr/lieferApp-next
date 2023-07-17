import { useEffect, useState } from 'react';
import { Table, CloseButton, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

const Warenkorb = () => {
  const [cart, setCart] = useState([]);
  const isMobile = useMediaQuery('(max-width: 700px)');

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((produkt) => {
      total += produkt.preis;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Warenkorb</h1>
      <div className="row mt-4">
        <div className={`col-${isMobile ? '15' : '9'}`}>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Bild</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Menge</th>
                <th>Betrag</th>
                <th>
                  <CloseButton disabled />
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((produkt, index) => (
                <tr key={index}>
                  <td>
                    <Image src={produkt.bild} alt={produkt.name} width={50} height={50} />
                  </td>
                  <td>{produkt.name}</td>
                  <td>{/* Extras */}</td>
                  <td>1</td>
                  <td>{produkt.preis.toFixed(2)}</td>
                  <td>
                    <Button className="btn-sm" onClick={() => removeFromCart(index)}>
                      x
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {!isMobile && (
          <div className="col-3 p-2">
            <div className="shadow">
              <Card>
                <Card.Header as="h5">Gesamt</Card.Header>
                <Card.Body className="text-center">
                  <Card.Title>{calculateTotal()} Euro</Card.Title>
                  <Button variant="primary">Zur Kasse</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="p-2 mb-5">
          <Card>
            <Card.Header as="h5">Gesamt</Card.Header>
            <Card.Body className="text-center">
              <Card.Title>{calculateTotal()} Euro</Card.Title>
              <Button variant="primary">Zur Kasse</Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Warenkorb;
