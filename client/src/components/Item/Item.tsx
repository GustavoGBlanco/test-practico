import { useHistory } from 'react-router-dom';
import { ItemRender } from '../types';
import iconTruck from '../../assets/images/ic_shipping.png';
import './Item.sass';

export interface ItemProps {
  item: ItemRender;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { id, title, price, thumbnail, shipping, address } = item;
  const history = useHistory();
  const handleClick = () => {
    history.push("/items/" + id);
  }
  return (
    <article className="items-box" >
      <div className="card-item" onClick={handleClick}>
        <div className="content">
          <img className="thumbnail" src={thumbnail} alt={title} />
          <div className="properties">
            <div className="headline">
              <h3 className="price">{price.amount.toLocaleString("es-AR", { style: "currency", currency: price.currency, maximumFractionDigits: 0 })}</h3>
              {shipping?.free_shipping &&
                <img className="icon" src={iconTruck} alt="Icono de envio a domicilio gratis" />
              }
            </div>
            <h4 className="short-description" >{title}</h4>
          </div>
        </div>
        <p className="address">{address?.state_name}</p>
      </div>
    </article>
  );
}

export default Item;