import { Table, CloseButton, Button, Card, Spinner } from "react-bootstrap"
import { useRouter } from "next/router"
export default function Bestellung() {
    const router = useRouter();
    const {nr} = router.query;
    return (
      <div>
        <h1>Bestellstatus</h1>
        <div className="row mt-4">
          <div className="col-9">
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Bestell NR.</th>
                  <th>Kunde</th>
                  <th>Adresse</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td>{nr}</td>
                  <td>Testmann</td>
                  <td>Berlin</td>
                  <td>
                    <span>Zubereitung</span>
                    <Spinner animation="border" variant="success" size="sm" ></Spinner>
                  </td>

                </tr>
               
              </tbody>
            </Table>
          </div>
          <div className="col-3 p2">
            <div className="shadow">
              <Card>
                <Card.Header as="h5">Gesamt</Card.Header>
                <Card.Body className="text-center">
                  <Card.Title>
                  6,95 Euro
                  </Card.Title>
                  <Button variant="success disabled">Bezahlt</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
