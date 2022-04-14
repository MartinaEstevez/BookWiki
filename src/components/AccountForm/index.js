import React from "react";
import { useState } from "react";
import { useCartContext } from "../CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Modal from "../Shared/Modal";
import "./style.css";
import { useNavigate } from "react-router-dom";

const AccountForm = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [id, setId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const { cartList, totalPrice, emptyCart } = useCartContext();

  const generateOrder = async (e) => {
    e.preventDefault();
    let order = {};

    order.buyer = dataForm;
    order.total = totalPrice();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const tittle = cartItem.tittle;
      const price = cartItem.price * cartItem.quantity;

      return { id, tittle, price };
    });

    const db = getFirestore();
    const queryCollectionSet = collection(db, "orders");
    addDoc(queryCollectionSet, order)
      .then((resp) => {
        setId(resp.id);
        setIsModalOpen(true);
      })
      .catch((err) => console.error(err))
      .finally(() => console.log("finished"));
  };

  function handleChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="loginForm">
      <div className="header">
        <h2>Crea tu cuenta</h2>
      </div>
      <form onSubmit={generateOrder} id="form" className="form">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={dataForm.name}
            onChange={handleChange}
            id="username"
          />
          <br></br>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
          <br></br>
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            value={dataForm.phone}
            onChange={handleChange}
          />
          <br></br>
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
      <Modal
        isOpen={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
          navigate("/", { replace: true });
          emptyCart();
        }}
      >
        <div className="confirmationModal" >
          <div className="orderModalSummery">
            <div className="orderTittleModal">Your Order</div>
            <div className="orderTextModal">
              <p>Suptotal (items)</p>
              <p>${totalPrice()}U$</p>
            </div>
            <div className="orderTextModal">
              <p>Estimated shipping</p>
              <p>Free</p>
            </div>
            <div className="orderTextModal">
              <p>Estimated taxed</p>
              <p>$0,00</p>
            </div>
            <div className="totalPriceModal">
              <p>Order Total:</p>
              <p>${totalPrice()}U$</p>
            </div>
          </div>
          <div className="orderModal">
            {cartList.map((products) => (
              <div className="itemModalContainer" key={products.id}>
                <div className="itemModalImage">
                  <img src={products.image} alt="" className="itemModalImg" />
                </div>
                <div className="itemModalInformation">
                  <div className="itemModalTittle">{`${products.tittle} by ${products.author}`}</div>
                  <div className="itemModalPrice">${products.price}U$</div>
                  <div className="itemModalInStock">
                    quantity selected: {products.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="textModal">
            <p>Your purchase has been processed successfully!</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AccountForm;
