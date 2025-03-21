import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M25.42 4.026 4.84 10.887a.438.438 0 0 0-.034.818l7.563 3.241a.25.25 0 0 0 .245-.026l7.414-5.297c.23-.163.512.12.35.35l-5.298 7.413a.25.25 0 0 0-.025.244l3.24 7.563a.437.437 0 0 0 .818-.033l6.86-20.58a.436.436 0 0 0-.314-.565.442.442 0 0 0-.24.011Z"
        />
    </Svg>
)
export default SvgComponent
