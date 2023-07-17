import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import jsondb from '@/jsondb/produkte';

const ProduktListe = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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