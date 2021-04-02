/* CartItem */
import { FC } from 'react'
import { CartItemProps } from 'App'
import { CartItemWrapper } from './CartItem.styles'
import Button from '@material-ui/core/Button'
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
        <div>

            {/*━━━━━(| Title |)━━━━━*/ }
            <h3>{ item.title }</h3>

            {/*━━━━━(| Cart Information |)━━━━━*/ }
            <div className="information">
                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }

                {/*━━━━━(| Price |)━━━━━*/ }
                <p>Price: ${ item.price }</p>

                {/*━━━━━(| Total-amount |)━━━━━*/ }
                <p>${ ( item.amount * item.price ).toFixed(2) }</p>

                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
            </div>

            {/*━━━━━(| Cart Buttons |)━━━━━*/ }
            <div className="buttons">
                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }

                {/*━━━━━(| Button(Remove from cart)  |)━━━━━*/ }
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={ () => removeFromCart(item.id) }
                > - </Button>

                {/*━━━━━(| Amount |)━━━━━*/ }
                <p>{ item.amount }</p>

                {/*━━━━━(| Button(Remove from cart)  |)━━━━━*/ }
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={ () => addToCart(item) }
                > + </Button>

                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
            </div>
        </div>

        {/*━━━━━(| Item Image |)━━━━━*/ }
        <img src={ item.image } alt={ item.title } />

    </CartItemWrapper>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: CartItem--
export default CartItem









