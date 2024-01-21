import {Text, ITextProps} from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
    children: ReactNode
}
export function Texto({children, ...rest}: TituloProps){
    return (
        <Text 
            fontSize={16} 
            color={'gray.500'} 
            textAlign="left" 
            mt={6}
            {...rest}
        >
          {children}
        </Text>
    )
}