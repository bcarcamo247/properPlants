import CartItem from "./CartItem";

export default function Cart({ cart, increaseQuantity, decreaseQuantity }) {
    return (
        <>
            <h1>Cart</h1>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            ))}
        </>
    );
}