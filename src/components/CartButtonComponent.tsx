/* CartButtonComponent */
import { FC } from 'react'
import { Badge } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { StyledButton } from 'App.styles'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
type CartButtonProps = {
    //___________
    onClick: () => void
    totalItems: number
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const CartButtonComponent: FC<CartButtonProps> = ({ onClick, totalItems }) => (
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    <StyledButton
        onClick={ onClick }>
        {/**/ }
        <Badge
            badgeContent={ totalItems }
            color='error'>
            <AddShoppingCartIcon
                htmlColor='dodgerblue'
                fontSize='large' />
        </Badge>
    </StyledButton>
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
)
// END-OF: CartButtonComponent--
export default CartButtonComponent