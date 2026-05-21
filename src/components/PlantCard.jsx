export default function PlantCard({ plant, addToCart }) {
        <>
            <h2>{plant.name}</h2>
            <p>Price: ${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </>
    ;
}
