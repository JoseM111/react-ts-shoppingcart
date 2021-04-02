/* Item */
import { FC } from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper } from './Item.styles'
import { CartItemProps } from 'App'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
type ItemProps = {
    //___________
    item: CartItemProps
    addToCart: (clickedItem: CartItemProps) => void
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* () <-- Implicit-return */
const Item: FC<ItemProps> = ({ item, addToCart }) => (
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    <Wrapper>
        {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
        {/*━━━━━(| Image |)━━━━━*/ }
        <img src={ item.image } alt={ item.title } />

        <div>
            {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }

            {/*━━━━━(| Price |)━━━━━*/ }
            <span>
                <h3 className="price">${ item.price.toFixed(2) }</h3>
                </span>
            {/*━━━━━(| Title |)━━━━━*/ }
            <h3 className="title">{ item.title }</h3>

            {/*━━━━━(| Description |)━━━━━*/ }
            <p className="description">{ item.description }</p>

            {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
        </div>
        {/*━━━━━(| Button |)━━━━━*/ }
        <Button onClick={ () => addToCart(item) }>
            Add to cart
        </Button>
        {/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
    </Wrapper>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: Item--
export default Item