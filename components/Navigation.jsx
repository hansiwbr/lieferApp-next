import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from 'react-bootstrap';

const Navigation = ({ cartItemsCount }) => {
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/" className="text-dark">
          
            <Image src="/bilder/logo.png" alt="logo" width={180} height={75} />
          
        </Link>
        <Link href="/warenkorb">
          
            <Image src="/bilder/warenkorb.png" alt="warenkorb" width={30} height={30} />
            <Badge pill bg="success">
              {cartItemsCount}
            </Badge>
          
        </Link>
      </div>
    </div>
  );
};

export default Navigation;