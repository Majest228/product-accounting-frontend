import Reference from '../../../constants/reference';
import { getProducts } from '../../../api';
import Field from '../../../constants/field';

const fields = [
  new Field('product_id', 'Товар').setReference(
    new Reference(
      getProducts,
      (option) => option.product_name,
      (value) => ({
        id: value.product_id,
        product_name: value.name,
      }),
      (option) => (
        <>
          <span>{option.manufacturer_name}</span>
          {option.product_name}
        </>
      )
    )
  ),
  new Field('price', 'Цена'),
];
export default fields;
