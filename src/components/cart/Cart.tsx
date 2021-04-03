/* Cart */
import { FC } from 'react'
import { CartWrapper } from './Cart.styles'
import { CartItemProps } from 'App'
import CartItem from '../cart-items/CartItem'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
type CartProps = {
    //___________
    cartItems: CartItemProps[]
    addToCart: (clickedItem: CartItemProps) => void
    removeFromCart: (id: number) => void
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const Cart: FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {

    /** #™━━━━━━━━━━━━ Helper Functions ━━━━━━━━━━━━ */

    const calcCartTotal = (items: CartItemProps[]) =>
        items.reduce(
            (accumulator, item) =>
                accumulator + item.amount * item.price, 0)
    // END-OF: calcCartTotal--

    /** #™━━━━━━━━━━━━ END OF: Functions ━━━━━━━━━━━━ */

    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    return (
        // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <CartWrapper>
            {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
            <h2>Shopping Cart</h2>

            {/*━━━━━(| If cart is empty |)━━━━━*/ }
            { cartItems.length === 0 ? <p>No items in cart.</p> : null }

            {/*━━━━━(| Mapping thru items |)━━━━━*/ }
            {
                cartItems.map((item) => (
                    //___________
                    // eslint-disable-next-line react/jsx-no-undef
                    <CartItem
                        key={ item.id }
                        item={ item }
                        addToCart={ addToCart }
                        removeFromCart={ removeFromCart } />
                ))
            }

            <h2>Total: ${ calcCartTotal(cartItems).toFixed(2) }</h2>

            {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
        </CartWrapper>
        // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    )
}
// END-OF: Cart--
export default Cart