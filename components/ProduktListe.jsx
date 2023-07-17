import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import jsondb from '@/jsondb/produkte';
import { useMediaQuery } from '@react-hook/media-query';

const ProduktListe = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [cart, setCart] = useState([]);

  const isMobile = useMediaQuery('(max-width: 700px)');

  useEffect(() => {
    setIsMobileView(isMobile);
  }, [isMobile]);

  const handleAddToCart = (produkt) => {
    setCart([...cart, produkt]);
    localStorage.setItem('cart', JSON.stringify([...cart, produkt]));
  };

  return (
    <div>
      <div className="row row-cols-3">
        {jsondb.produkte.map((produkt) => (
          <div key={produkt.name} className={`mt-3 ${isMobileView ? 'col-12' : 'col'}`}>
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