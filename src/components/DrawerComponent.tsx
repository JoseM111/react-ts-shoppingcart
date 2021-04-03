/* DrawerComponent */
import { FC } from 'react'
import Cart from './cart/Cart'
import { Drawer } from '@material-ui/core'
import { CartItemProps } from 'App'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
type DrawerProps = {
    //___________
    open: boolean
    onClose: () => void
    addToCart: (clickedItem: CartItemProps) => void
    cartItems: CartItemProps[]
    removeFromCart: (id: number) => void
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const DrawerComponent: FC<DrawerProps> = ({ addToCart, cartItems, onClose, open, removeFromCart }: DrawerProps) => (
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    <Drawer
        anchor="right"
        open={ open }
        onClose={ onClose }
    >
        <Cart
            addToCart={ addToCart }
            cartItems={ cartItems }
            removeFromCart={ removeFromCart }
        />
    </Drawer>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: DrawerComponent--
export default DrawerComponent