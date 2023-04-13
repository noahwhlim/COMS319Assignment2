import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

function Confirmation(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button class="btn btn-dark btn-block btn-lg" variant="primary"  onClick={handleShow}>
        Checkout
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {/* <h1>{prop.cart[0]}</h1> */}

        <div class="container p-0">
        <div class="card px-4">
            <h3 class="h8 py-3">Confirmation</h3>
            <div class="row gx-3">
                {prop.cart.map((el) => (
                    <div>
                        <img class="img-fluid" src={el.image} width={30} />
                        {el.title} ${el.price}
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    </div>
        </Modal.Body>
        <Modal.Footer>

            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirmation;