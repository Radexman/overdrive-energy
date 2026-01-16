import Can from '../Can';

const ProductsScene = () => {
  return (
    <group>
      <group>
        <Can textureName="orange-burst" position={[-2.5, 0, 0]} />
        <Can textureName="berry-frost" position={[3, -5, 0]} />
      </group>
    </group>
  );
};

export default ProductsScene;
