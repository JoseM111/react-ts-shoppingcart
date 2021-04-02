import styled from 'styled-components'
import { boxShadow } from 'App.styles'
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//: - ©MEMBER-PROPERTIES|
/**| #™━━━━━━━━━━━━━━━━━━━━━|*/
const borderRadius = ({ value = 0 }) => `${value}px`
const textShadow = '2px 2px 1px black;'
const horizontalMargin = ({ marginRight = 0, marginLeft = 0 } ): string => 
    `0 ${ marginRight }px 0 ${ marginLeft }px`
/// - END OF: horizontalMargin ♠♠♠

/**| #™━━━━━━━━━━━━━━━━━━━━━|*/

export/**/ const Wrapper = styled.div`
    //___________
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    box-shadow: ${ boxShadow };
    ${ borderRadius({ value: 20 }) };
    height: 100%;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    border-radius: 20px;
    
    .title {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: "Avenir Next", sans-serif;
        font-size: 1rem;
        margin: ${horizontalMargin({ marginRight: 8, marginLeft: 8 })};
    }

    .description {
        font-family: "Varela Round", sans-serif;
        font-size: 0.85rem;
        text-align: center;
        margin: ${horizontalMargin({ marginRight: 8, marginLeft: 8 })};
    }

    .price { 
        color: dodgerblue;
        opacity: 0.90;
        font-size: 1.5rem;
        font-family: Verdana, sans-serif;
        text-shadow: ${ textShadow };
        align-self: flex-end;
        //transform: translateY(180%);
        display: flex;
        justify-content: space-around;
        margin-right: 1.5rem;
    }
    .price:hover {
        color: #fff;
        transition: all 0.45s ease-in-out;
        transform: scale3d(1.1, 1.1, 1.3);
    }

    /* Styling our button */

    button {
        //___________
        border-radius: 0 0 20px 20px;
        font-size: 0.8rem;
        font-family: "Krona One", sans-serif;
        font-weight: 600;
    }
    button:hover {
        color: white;
    }

    &:hover {
        background: crimson;
        color: white;
        opacity: 2;
    }

    /* Styling our img */

    img {
        //___________
        width: 100%;
        height: 280px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 50%;
        object-fit: scale-down;
        background-color: #fff;
        
    }
    img:hover {
        transform: scale3d(1.1, 1.1, 1.3);
        border-radius: 15px;
        filter: drop-shadow(0.75rem 0.45rem 0.75rem dimgray);
        transition: all 0.45s linear;
        width: 100%;
        height: 310px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: scale-down;
        background-color: #fff;
    }
    
    div {
        //___________
        font-family: Arial, Helvetica, sans-serif;
        flex: 1;
        padding: 1rem;
        height: 100%;
    }
    
    div:hover {
        transform: scale3d(1.1, 1.1, 1.3);
        transition: all 0.45s linear;
        color: white;
    }
`
/** END OF --> : Wrapper =
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/