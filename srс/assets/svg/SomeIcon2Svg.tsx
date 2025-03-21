import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M4.395 25.605a15 15 0 1 1 20.84-21.578 15 15 0 0 1-20.84 21.578ZM17.1 15l4.245-4.245L19.23 8.64 15 12.885 10.755 8.64 8.64 10.755 12.885 15 8.64 19.245l2.115 2.115L15 17.115l4.245 4.245 2.115-2.115L17.115 15H17.1Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h30v30H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
