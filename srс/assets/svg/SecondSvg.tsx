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
            d="m25.2 12.684-8.4-5.88v22.512l8.4 5.88V12.684Zm2.1 22.512 10.053-7.035a1.05 1.05 0 0 0 .447-.861V7.35a1.05 1.05 0 0 0-1.653-.861L27.3 12.684v22.512ZM4.647 13.839 14.7 6.804v22.512l-8.847 6.195A1.05 1.05 0 0 1 4.2 34.65V14.7a1.05 1.05 0 0 1 .447-.861Z"
        />
    </Svg>
)
export default SvgComponent
