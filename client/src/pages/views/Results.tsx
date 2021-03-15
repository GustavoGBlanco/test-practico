import { ItemService } from '../../server/services/item.services';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import Base from '../layouts/Base';

import SearchResults from '../../components/SearchResults/SearchResults';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import Loader from '../../components/Loader/Loader';

export interface ResultsProps {

}

const Results: React.FC<ResultsProps & RouteComponentProps<any>> = (props) => {

  const history = useHistory();
  const [itemsToRender, setItemsToRender] = useState([]);
  const [categoriesToRender, setCategoriesToRender] = useState([]);
  const [haveResults, setHaveResults] = useState(false);
  const [itemDetails, setItemDetails] = useState(false);
  const [singleItem, setSingleItem] = useState({
    id: '',
    title: '',
    price: {
      currency: '',
      amount: 0,
      decimals: 0
    },
    thumbnail: '',
    picture: '',
    shipping: {
      free_shipping: false
    },
    item_categories: [],
    condition: '',
    sold_quantity: 0,
    description: ''
  });

  useEffect(() => {
    onRefreshAction();
  }, [props.location.search, props.match.params.id, itemDetails]);

  const onRefreshAction = () => {
    const { id } = props.match.params;

    if (id) {
      getSingleItem(id)
      setItemDetails(true);
    } else 
      searchItems();
  }

  const getSingleItem = async (id: string) => {
    const result = await ItemService.item(id)
    try {
      setSingleItem(result);
    } catch (error) {
      return error;
    }

  }

  const searchItems = async () => {
    setItemDetails(false);
    const { items, categories } = await ItemService.search(props.location.search.substring(8).toString())

    try {
      if (items) {
        setItemsToRender(items);
        setHaveResults(true);
      }
      if (categories) 
        setCategoriesToRender(categories);
      
    } catch (error) {
      return error;
    }
  }

  return (
    <Base>
      <>
        {
          ((!itemDetails && itemsToRender.length > 0) &&
            <SearchResults items={itemsToRender} categories={categoriesToRender} />
          ) || ((!!itemDetails) &&
            <ItemDetails item={singleItem} />
          ) || ((!haveResults) &&
            <Loader type="searchLoader" />
          ) || ((!!haveResults) &&
            history.push(`/Error404`)
          )
        }
      </>
    </Base>
  );
}
export default Results;