import React, { useEffect } from 'react';
import './css/ShoppingCart.css';

const ShoppingCart = ({ cart, setCart, removeFromCart, updateQuantity }) => {
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
      const price = parseFloat(item.price); // Asegurarse de que el precio es un número
      message += `🍔 ${item.title} (x${item.quantity}) - $${price.toFixed(2)} c/u\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}\n`;
    return encodeURIComponent(message);
  };

  // Manejar el pago
  const handlePay = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de pagar.');
      return;
    }

    const whatsappNumber = '3816671884';
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Abrir WhatsApp y vaciar el carrito
    window.open(whatsappURL, '_blank');
    setCart([]); // Vaciar carrito
    localStorage.removeItem('cart'); // Limpiar localStorage
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
              Eliminar
            </button>
          </div>
        ))
      )}
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <button className="pay-button" onClick={handlePay}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
