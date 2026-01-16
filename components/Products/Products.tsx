import { Environment, View } from '@react-three/drei';

import ProductsScene from './ProductsScene';
import Bounded from '../Bounded';
import Product from './Product';

const Products = () => {
  return (
    <Bounded className="products">
      <Product
        title="Orange Burst"
        subtext="Bold citrus energy with an explosive orange kick."
        textureName="orange-burst"
        canPosition={[-2.5, 0, 0]}
      />
      <Product
        title="Berry Frost"
        subtext="Icy berry blend with a smooth, refreshing finish."
        textureName="berry-frost"
        canPosition={[2.5, 0, 0]}
        isAlignedLeft
      />
      <Product
        title="Lemon Lime"
        subtext="Sharp citrus freshness with a clean, crisp taste."
        textureName="lemon-lime"
        canPosition={[-2.5, 0, 0]}
      />
    </Bounded>
  );
};

export default Products;
