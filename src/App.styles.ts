import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

//: - ©MEMBER-PROPERTIES|
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/
export const horizontalMargin = ({ marginRight = 0, marginLeft = 0 } ): string =>
    `0 ${ marginRight }px 0 ${ marginLeft }px`
/// - END OF: horizontalMargin ♠♠♠
export const boxShadow = `
    inset 0 -3em 3em rgba(0,0,0,0.1),
    0 0  0 2px rgb(255,255,255),
    0.3em 0.3em 1em rgba(0,0,0,0.3);
`
/// - END OF: boxShadow ♠♠♠
/*| #™━━━━━━━━━━━━━━━━━━━━━|*/

export const ContainerWrapper = styled.div`
    //___________
    margin: 40px;
`
/** END OF --> : ContainerWrapper
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

export const StyledButton = styled(IconButton)`
    //___________
    position: fixed;
    z-index: 100;
    right: 30px;
    top: 20px;
    border: none;
    background-color: #fff;
    box-shadow: ${ boxShadow };
    &:hover {
        transition: all 0.45s ease-in-out;
        transform: scale3d(1.1, 1.1, 1.3);
    }
`
/** END OF --> : NAME
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/









