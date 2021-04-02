/* api */
import { CartItemProps } from './App'
{/**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }

export const fetchProducts = async (): Promise<CartItemProps[]> => {
    //___________
    return await (
        await fetch('https://fakestoreapi.com/products')
    ).json()
}
// END-OF: fetchProducts--