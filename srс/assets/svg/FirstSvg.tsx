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
            d="m21 29.615-6.541 2.814c-.943.406-1.839.328-2.687-.234-.848-.561-1.272-1.346-1.272-2.354V9.828c0-.806.27-1.479.81-2.018.54-.539 1.213-.809 2.018-.81h15.346c.805 0 1.477.27 2.018.81.54.54.81 1.213.808 2.018v20.013c0 1.008-.424 1.793-1.272 2.354-.848.562-1.744.64-2.687.234L21 29.615Z"
        />
    </Svg>
)
export default SvgComponent
