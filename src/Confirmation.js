import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

function Confirmation(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button class="btn btn-dark btn-block btn-lg" variant="primary"  onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container p-0">
        <div class="card px-4">
            <h3 class="h8 py-3">Confirmation</h3>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Cardholder Name</p>
                        <input class="form-control mb-3" type="text" value={prop.name}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" value={prop.card}/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" value={prop.expiry}/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" value={prop.cvv}/>
                    </div>
                </div>

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