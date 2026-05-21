import { plants } from "../data";
import PlantCard from "./PlantCard";

export default function Plants({ addToCart }) {
    return (
        <>
            <h1>Plants</h1>
            {plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
        </>
    );
}
