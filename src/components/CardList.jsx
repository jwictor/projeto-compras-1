import Card from './Card';
import PropTypes from 'prop-types';

const CardList = ({ orders, onDetailsClick }) => {
  return (
    <div className="card-list">
      {orders.map(order => (
        <Card key={order.n_pedido} order={order} onDetailsClick={onDetailsClick} />
      ))}
    </div>
  );
};

CardList.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
          filial: PropTypes.string.isRequired,
          n_pedido: PropTypes.string.isRequired,
          tipo: PropTypes.string.isRequired,
          user: PropTypes.string.isRequired,
          grupo: PropTypes.string.isRequired,
          nivel: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          emissao: PropTypes.string.isRequired,
          vtotal: PropTypes.number.isRequired,
        })
      ).isRequired,
    onDetailsClick: PropTypes.func.isRequired,
  };

  export default CardList;