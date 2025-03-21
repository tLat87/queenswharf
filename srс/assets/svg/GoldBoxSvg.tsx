import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="m37.859 14.929.154.13.143-.143 3.023-3.024 2.51 2.527-5.36 5.361H9.67l-5.36-5.36 2.51-2.51 3.024 3.006.143.142.154-.13 7.939-6.708H29.86l7.999 6.709ZM12.064 39.78l-1.307-17.56h26.486l-1.307 17.56H12.064Z"
        />
        <Path
            fill="url(#a)"
            d="m37.859 14.929.154.13.143-.143 3.023-3.024 2.51 2.527-5.36 5.361H9.67l-5.36-5.36 2.51-2.51 3.024 3.006.143.142.154-.13 7.939-6.708H29.86l7.999 6.709ZM12.064 39.78l-1.307-17.56h26.486l-1.307 17.56H12.064Z"
        />
        <Path
            stroke="url(#b)"
            strokeWidth={0.44}
            d="m37.859 14.929.154.13.143-.143 3.023-3.024 2.51 2.527-5.36 5.361H9.67l-5.36-5.36 2.51-2.51 3.024 3.006.143.142.154-.13 7.939-6.708H29.86l7.999 6.709ZM12.064 39.78l-1.307-17.56h26.486l-1.307 17.56H12.064Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={21.119}
                x2={35.168}
                y1={14.909}
                y2={50.476}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#CCA65A" />
                <Stop offset={1} stopColor="#FDFADD" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={24.949}
                x2={24.949}
                y1={15.818}
                y2={40}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE6B5" />
                <Stop offset={1} stopColor="#865B04" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default SvgComponent
