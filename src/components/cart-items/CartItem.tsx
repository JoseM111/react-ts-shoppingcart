/* CartItem */
import { FC } from 'react'
import { CartItemProps } from 'App'
import { CartItemWrapper } from './CartItem.styles'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
export type ItemProps = {
    //___________
    item: CartItemProps
    addToCart: (clickedItem: CartItemProps) => void
    removeFromCart: (id: number) => void
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const CartItem: FC<ItemProps> = ({ item, addToCart, removeFromCart }) => (
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    <CartItemWrapper>
        <div >

            {/*━━━━━(| Title |)━━━━━*/ }
            <h3>{ item.title }</h3>
            
        </div>

    </CartItemWrapper>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: CartItem--
export default CartItem