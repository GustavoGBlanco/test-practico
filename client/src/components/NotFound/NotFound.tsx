import './NotFound.sass';
import logo from '../../assets/images/Logo_ML@2x.png';

export interface NotFoundProps {
    
}
 
const NotFound: React.FC<NotFoundProps> = () => {
    return ( 
        <article className="not-found">
            <h3>No hemos encontrado resultados</h3>
            <img src={logo} alt="Logo Mercado Libre"/>
            <p>Mercado Libre, ¡Nunca dejes de buscar!</p>
        </article>
     );
}
 
export default NotFound;