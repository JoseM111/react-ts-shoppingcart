/* App */
import { useQuery } from 'react-query'
import { LinearProgress, Grid, Drawer, Badge } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { ContainerWrapper, StyledButton } from 'App.styles'
import Item from 'components/items/Item'
import { useState } from 'react'

//: - ©| PROPS |
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
export type CartItemProp = {
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

const fetchProducts = async (): Promise<CartItemProp[]> => {
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
    const [ cartItems, setCartItems ] = useState<CartItemProp[]>([])
    const { data, isLoading, error } =
        useQuery<CartItemProp[]>(
            'products',
            fetchProducts,
        )
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    // console.log(data)

    /** #™━━━━━━━━━━━━ Helper Functions━━━━━━━━━━━━ */

    const getTotalItems = (items: CartItemProp[]) => null
    // END-OF: getTotalItems--

    const handleAddToCart = (clickedItem: CartItemProp) => null
    // END-OF: handleAddToCart--

    // const handleRemoveFromCart = () => null
    // END-OF: handleAddToCart--

    /** #™━━━━━━━━━━━━ END OF: Functions━━━━━━━━━━━━ */

    if (isLoading) return <LinearProgress color="secondary" />
    if (error) return <div>404 Something went wrong...</div>

    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    return (
        // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <ContainerWrapper>
            {/*━━━━━(| Drawer |)━━━━━*/ }
            <Drawer
                anchor="right"
                open={ openCart }
                onClose={ () => setOpenCart(false) }>
                DrawerasdasFCvscvzdvaSAADXA
            </Drawer>

            {/*━━━━━(| StyledButton |)━━━━━*/ }
            {/** Opens sidebar modal */ }
            <StyledButton
                onClick={ () => setOpenCart(true) }>
                {/**/ }
                <Badge
                    badgeContent={ getTotalItems(cartItems) }
                    color='error'>
                    <AddShoppingCartIcon
                        htmlColor='dodgerblue'
                        fontSize='large' />
                </Badge>
            </StyledButton>

            {/*━━━━━| Grid |━━━━━*/ }
            <Grid container spacing={ 3 }>
                {   // Mapping through the items
                    data?.map((item) => (
                        //___________
                        <Grid item key={ item.id } xs={ 12 } sm={ 4 }>
                            {/**/ }
                            <Item
                                item={ item }
                                handleAddToCart={ handleAddToCart }
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
