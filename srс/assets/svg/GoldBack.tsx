import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={17}
        fill="none"
        {...props}
    >
        <Path stroke="#CCA65A" d="m9 .5-8 8 8 8" />
    </Svg>
)
export default SvgComponent
