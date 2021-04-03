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
                <b><p
                >Price:
                    <br/>
                 ${ item.price.toFixed(2) }
                </p></b>
                <br/>
                
                {/*━━━━━(| Total-amount |)━━━━━*/ }
                <b> <p>
                    Total:
                    <br/>
                    ${ ( item.amount * item.price ).toFixed(2) }
                </p></b>

                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
            </div>

            {/*━━━━━(| Cart Buttons |)━━━━━*/ }
            <div className="buttons">
                {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }

                {/*━━━━━(| Button(Remove from cart)  |)━━━━━*/ }
                <Button
                    className="btn1"
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={ () => removeFromCart(item.id) }
                > 
                    <b>-</b> 
                </Button>

                {/*━━━━━(| Amount |)━━━━━*/ }
                <b><p>{ item.amount }</p></b>

                {/*━━━━━(| Button(Remove from cart)  |)━━━━━*/ }
                <Button
                    className="btn2"
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={ () => addToCart(item) }
                >
                    <b>+</b>
                </Button>

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









