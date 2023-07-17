export function getWarenkorb() {
    const warenkorb = localStorage.getItem("warenkorb");
    return warenkorb ? JSON.parse(warenkorb) : [];
  }
  
  export function addToWarenkorb(produkt) {
    const warenkorb = getWarenkorb();
    warenkorb.push(produkt);
    localStorage.setItem("warenkorb", JSON.stringify(warenkorb));
  }
  
  export function removeFromWarenkorb(produkt) {
    const warenkorb = getWarenkorb();
    const updatedWarenkorb = warenkorb.filter((p) => p.name !== produkt.name);
    localStorage.setItem("warenkorb", JSON.stringify(updatedWarenkorb));
  }
  