import {Text, ITextProps} from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
    children: ReactNode
}
export function TituloTexto({children, ...rest}: TituloProps){
    return (
        <Text 
            fontSize={20} 
            textAlign="center" 
            mt={6} 
            fontWeight="bold"
            color={"gray.500"}
        >
          {children}
        </Text>
    )
}