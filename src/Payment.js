import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Confirmation from "./Confirmation"

function Payment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');



  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleCardChange = (event) => {
    const value = event.target.value;
    setCard(value);
  };

  const handleExpiryChange = (event) => {
    const value = event.target.value;
    setExpiry(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value;
    setCvv(value);
  };


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
        <div class="container p-0">
        <div class="card px-4">
            <h3 class="h8 py-3">Payment Details</h3>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Cardholder Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name" onChange={handleNameChange}  value={name}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 1234 5678" onChange={handleCardChange}  value={card}/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY" onChange={handleExpiryChange}  value={expiry}/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***" onChange={handleCvvChange}  value={cvv}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} data-bs-toggle="collapse">
                Go Back
            </Button>
            {/* <Button variant="primary" data-dismiss="modal" onclick={handleClose}>
                Submit
            </Button> */}
            <Confirmation onClick={handleClose} name={name} card={card} expiry={expiry} cvv={cvv} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Payment;