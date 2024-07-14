import PropTypes from 'prop-types';

 const Card = ({ order, onDetailsClick }) => {
  return (
    <div className="card">
      <h3>Pedido: {order.n_pedido}</h3>
      <p>Filial: {order.filial}</p>
      <p>Tipo: {order.tipo}</p>
      <p>Usuário: {order.user}</p>
      <p>Grupo: {order.grupo}</p>
      <p>Nível: {order.nivel}</p>
      <p>Status: {order.status}</p>
      <p>Emissão: {order.emissao}</p>
      <p>Valor Total: {order.vtotal}</p>
      <button onClick={() => onDetailsClick(order.n_pedido)}>Detalhes</button>
    </div>
  );
};

Card.propTypes = {
    order: PropTypes.shape({
        filial: PropTypes.string.isRequired,
        n_pedido: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        grupo: PropTypes.string.isRequired,
        nivel: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        emissao: PropTypes.string.isRequired,
        vtotal: PropTypes.number.isRequired,
      }).isRequired,
    onDetailsClick: PropTypes.func.isRequired,
  };

  export default Card;