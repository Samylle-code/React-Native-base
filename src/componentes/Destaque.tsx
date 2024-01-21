import {Text, ITextProps} from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
    children: ReactNode
}
export function Destaque({children, ...rest}: TituloProps){
    return (
        <Text 
            mt={3} 
            textAlign="center"
            color={'gray.600'} 
            fontSize={16} 
            fontWeight={700} 
        >
          {children}
        </Text>
    )
}