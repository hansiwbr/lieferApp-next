import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import jsondb from '@/jsondb/produkte';

const ProduktListe = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (produkt) => {
    setCart([...cart, produkt]);
    localStorage.setItem('cart', JSON.stringify([...cart, produkt]));
  };

  // Check if the screen width is less than or equal to 700px for mobile view
  const isMobileView = window.innerWidth <= 700;

  return (
    <div>
      <div className={`row row-cols-${isMobileView ? 1 : 3}`}>
        {jsondb.produkte.map((produkt) => (
          <div key={produkt.name} className={`mt-3 col${isMobileView ? '' : ''}`}>
            <Card>
              <Link href={`/produkte/${produkt.url}`} passHref>
                <Card.Img variant="top" src={produkt.bild} />
              </Link>
              <Card.Body>
                <Card.Title>
                  {produkt.name} {produkt.preis}€
                </Card.Title>
                <Card.Text>{produkt.beschreibung}</Card.Text>
                <Button variant="danger" onClick={() => handleAddToCart(produkt)}>
                  Zum Warenkorb
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default ProduktListe;