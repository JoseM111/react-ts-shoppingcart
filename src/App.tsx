/* App */
import { useQuery } from 'react-query'
import { LinearProgress, Grid } from '@material-ui/core'
import { ContainerWrapper } from 'App.styles'
import Item from 'components/items/Item'
import { useState } from 'react'
import DrawerComponent from 'components/DrawerComponent'
import CartButtonComponent from 'components/CartButtonComponent'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
export type CartItemProps = {
    //___________
    id: number
    category: string
    description: string
    image: string
    price: number
    title: string
    amount: number
}
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

const fetchProducts = async (): Promise<CartItemProps[]> => {
    //___________
    return await (
        await fetch('https://fakestoreapi.com/products')
    ).json()
}
// END-OF: fetchProducts--


/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const App = () => {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const [ openCart, setOpenCart ] = useState(false)
    const [ cartItems, setCartItems ] = useState<CartItemProps[]>([])
    const { data, isLoading, error } =
        useQuery<CartItemProps[]>(
            'products',
            fetchProducts,
        )
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    // console.log(data)

    /** #™━━━━━━━━━━━━ Helper Functions ━━━━━━━━━━━━ */

    const getTotalItems = (items: CartItemProps[]) => {
        //___________
        return items.reduce((accumulator: number, item: CartItemProps) => {
            return item.amount
        }, 0)
    }
    // END-OF: getTotalItems--

    const handleAddToCart = (clickedItem: CartItemProps) => null
    // END-OF: addToCart--

    const handleRemoveFromCart = () => null
    // END-OF: addToCart--

    /** #™━━━━━━━━━━━━ END OF: Functions ━━━━━━━━━━━━ */

    if (isLoading) return <LinearProgress color="secondary" />
    if (error) return <div>404 Something went wrong...</div>

    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    return (
        // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <ContainerWrapper>
            {/*━━━━━(| Drawer |)━━━━━*/ }
            <DrawerComponent
                open={ openCart }
                onClose={ () => setOpenCart(false) }
                addToCart={ handleAddToCart }
                cartItems={ cartItems }
                removeFromCart={ handleRemoveFromCart }
            />

            {/*━━━━━(| StyledButton |)━━━━━*/ }
            {/** Opens sidebar modal */ }
            <CartButtonComponent
                onClick={ () => setOpenCart(true) }
                totalItems={ getTotalItems(cartItems) } 
            />

            {/*━━━━━| Grid |━━━━━*/ }
            <Grid container spacing={ 3 }>
                {   // Mapping through the items
                    data?.map((item) => (
                        //___________
                        <Grid item key={ item.id } xs={ 12 } sm={ 4 }>
                            {/**/ }
                            <Item
                                item={ item }
                                addToCart={ handleAddToCart }
                            />
                        </Grid>
                    ))
                }
            </Grid>
            {/*(| END OF: Grid |)*/ }
        </ContainerWrapper>
        // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    )
}
// END-OF: App--
export default App
