/* Item */
import { FC } from 'react'
import { CartItemProp } from 'App'
import Button from '@material-ui/core/Button'
import { Wrapper } from './Item.styles'
//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
type Props = {
    //___________
    item: CartItemProp
    handleAddToCart: (clickedItem: CartItemProp) => void
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* () <-- Implicit-return */
const Item: FC<Props> = ({ item, handleAddToCart }) => (
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    <Wrapper>

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
        <Button onClick={ () => handleAddToCart(item) }>
            Add to cart
        </Button>

    </Wrapper>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: Item--
export default Item