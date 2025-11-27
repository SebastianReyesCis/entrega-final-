const CheckoutForm = ({ formValues, handleChange, sendOrder }) => {
  return (
    <form className="formulario" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formValues.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formValues.phone}
        onChange={handleChange}
      />
      <button type="button" onClick={sendOrder}>
        Confirmar compra
      </button>
    </form>
  );
};

export default CheckoutForm;
