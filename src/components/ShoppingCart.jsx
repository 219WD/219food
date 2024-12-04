import React, { useEffect, useState } from 'react';
import './css/ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({ cart, setCart, removeFromCart, updateQuantity }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Guardar carrito en localStorage cuando se actualiza
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Generar mensaje para WhatsApp
  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      return 'El carrito está vacío.';
    }

    let message = '¡Hola! Quisiera realizar el siguiente pedido:\n\n';
    cart.forEach((item) => {
      const price = parseFloat(item.price);
      message += `🍔 ${item.title} (x${item.quantity}) - $${price.toFixed(2)} c/u\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}\n`;
    return encodeURIComponent(message);
  };

  const handlePayOptions = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de pagar.');
      return;
    }
    setShowPaymentOptions(true);
  };

  const handleWhatsAppPay = () => {
    const whatsappNumber = '3816671884';
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
    setCart([]);
    localStorage.removeItem('cart');
  };

  const openModal = (info) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>${parseFloat(item.price).toFixed(2)}</p>
            </div>
            <div className="buttons-cart">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button
              className="delete-button"
              onClick={() => removeFromCart(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))
      )}
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <button className="pay-button" onClick={handlePayOptions}>
          Pagar
        </button>
      </div>
      {showPaymentOptions && (
        <div className="payment-options">
          <button className="payment-button whatsapp" onClick={handleWhatsAppPay}>
            Efectivo (WhatsApp)
          </button>
          <button
            className="payment-button transferencia"
            onClick={() =>
              openModal({
                title: 'Transferencia Bancaria',
                details: ['Alias: mi-alias', 'CBU: 1234567890123456789012'],
              })
            }
          >
            Transferencia
          </button>
          <button
            className="payment-button mercadopago"
            onClick={() =>
              openModal({
                title: 'MercadoPago',
                details: [
                  'Abre tu app de MercadoPago para escanear el código QR.',
                  'Realiza tu pago desde la opción de enviar dinero.',
                ],
              })
            }
          >
            MercadoPago
          </button>
        </div>
      )}
      {modalInfo && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalInfo.title}</h3>
            {modalInfo.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <button className="close-modal" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
