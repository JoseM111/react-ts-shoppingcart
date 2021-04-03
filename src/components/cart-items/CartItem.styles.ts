import styled from 'styled-components'
import { boxShadow, horizontalMargin } from 'App.styles'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

//: - ©STYLED-PROPERTIES|
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
const imageBgColor = `
    #ffffff 0 0 0 2px, rgba(0, 0, 0, 0.3) 0.3em 0.3em 1em;
`
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const CartItemWrapper = styled.div`
    //___________
    display: flex;
    justify-content: space-between;
    font-family: "Avenir Next", sans-serif;
    border-bottom: 1px solid lightblue;
    box-shadow: ${ boxShadow };
    margin-top: 1.5em;
    padding: 20px;
    border-radius: 15px;

    div {
        flex: 1;
    }
    
    p {
        margin-right: 20px;
    }
    
    .information, .buttons {
        //___________
        display: flex;
        justify-content: space-between;
    }
    
    .btn1, .btn2 {
        box-shadow: ${ boxShadow };
        border-radius: 20px;
        background-color: white;
        margin: ${horizontalMargin({marginRight: 17, marginLeft: 0})};
    }
    .btn1:hover {
        background-color: lightgray;
        transition: all 0.45s ease-in-out;
    }
    .btn2:hover {
        background-color: lightgray;
        transition: all 0.45s ease-in-out;
    }
    .btn1:active {
        transition: all 0.35s linear;
        opacity: 0;
    }
    .btn2:active {
        transition: all 0.35s linear;
        opacity: 0;
    }
    
    
    img {
        //___________
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 50%;
        box-shadow: ${imageBgColor};
        border-radius: 20px;
        cursor: pointer;
        display: block;
        //height: 280px;
        object-fit: scale-down;
        width: 50%;
    }
    
`
/** END OF --> : CartItemWrapper
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/