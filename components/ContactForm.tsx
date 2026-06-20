import type { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aquí va la lógica para enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mensaje:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;