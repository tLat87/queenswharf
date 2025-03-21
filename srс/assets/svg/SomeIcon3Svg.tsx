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
            d="m15 21.154-4.672 2.01c-.674.29-1.313.234-1.92-.168-.605-.4-.908-.961-.908-1.681V7.02c0-.576.193-1.056.579-1.441C8.465 5.194 8.945 5 9.52 5h10.961c.575 0 1.056.193 1.441.579.386.386.579.866.578 1.441v14.295c0 .72-.303 1.28-.909 1.681-.606.402-1.245.458-1.919.168L15 21.154Z"
        />
    </Svg>
)
export default SvgComponent
