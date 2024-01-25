import { VStack, Text, ScrollView, Box } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import { Titulo } from "../componentes/Titulo"
import { CardConsulta } from "../componentes/CardConsultas"

export default function Explorar(navigation){
    return(
    
        <ScrollView>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
            
                <Box borderWidth={2} borderColor="gray.200" p={3} pb={6}  mt={5} borderRadius={8}>
                    <EntradaTexto
                    placeholder="Digite a especialidade"
                    />
                    <EntradaTexto
                    placeholder="Digite a sua localização"
                    />
                    <Botao onPress={() => navigation.navigate('Tabs')} mt={4}> Buscar</Botao>
                
                </Box>

                <Titulo color="blue.500" fontSize="xl" alignSelf="center" mb={2}>Resultado da Busca</Titulo>
                
                
                <CardConsulta 
                    nome='Dr. Andre'
                    especialidade='Cardiologista'
                    foto='https://github.com/andreocunha.png'
                    data='20/04/2024'
                    novaConsulta
                />

                <CardConsulta 
                    nome='Dr. Andre'
                    especialidade='Cardiologista'
                    foto='https://github.com/andreocunha.png'
                    data='20/04/2024'
                    novaConsulta
                />
            </VStack>
        </ScrollView>
        
    )
}