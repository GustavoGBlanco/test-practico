import './Loader.sass';

export interface LoaderProps {
    type: string;
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
    return (
        <div className="spinner">
            <span className="spinner-inner-1"></span>
            <span className="spinner-inner-2"></span>
            <span className="spinner-inner-3"></span>
        </div>
    );
}

export default Loader;