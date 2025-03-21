import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M21 22.969a1.969 1.969 0 1 0 0-3.938 1.969 1.969 0 0 0 0 3.938Z"
        />
        <Path
            fill="#fff"
            d="M21 3.938C11.592 3.938 3.937 11.591 3.937 21c0 9.408 7.655 17.063 17.063 17.063 9.408 0 17.063-7.655 17.063-17.063 0-9.408-7.655-17.063-17.063-17.063Zm8.619 9.296-3.846 9.614a5.252 5.252 0 0 1-2.925 2.925l-9.614 3.846a.656.656 0 0 1-.853-.853l3.846-9.614a5.252 5.252 0 0 1 2.925-2.925l9.614-3.846a.656.656 0 0 1 .853.853Z"
        />
    </Svg>
)
export default SvgComponent
