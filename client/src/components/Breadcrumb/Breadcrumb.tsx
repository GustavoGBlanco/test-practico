import { Category } from "../types";
import './Breadcrumb.sass';

export interface BreadCrumbProps {
  categories: Category[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ categories }) => {
  return (
    <>
      <section className="breadcrumb">
        {categories && categories.reverse().map((category, index) => {
          const lastCategory = (categories.length === (index + 1));
          if (!lastCategory) {
            return (
              <div className="breadcrumb-box" key={index}>
                <span>{category.name} </span>
                <span className="wrapper"> &gt; </span>
              </div>

            );
          } else 
              return (<span className="last-category" key={index}>{category.name}</span>)
        })
        }
      </section>
    </>
  );
}

export default BreadCrumb;