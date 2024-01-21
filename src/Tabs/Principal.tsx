import { VStack, ScrollView, Image, Text, Box, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Botao } from '../componentes/Botao'
import Logo from '../assets/Logo.png'
import { Texto } from '../componentes/Texto'
import { TituloTexto } from '../componentes/TituloTexto'
import { Destaque } from '../componentes/Destaque'
import { Depoimentos } from '../utils/Depoimentos'


export default function Principal({navigation}){
    return(
        <ScrollView flex={1}>
          <VStack flex={1} p={5} mb={10} >
            <Image source={Logo} alt="Logo Voll" />

            <Titulo textAlign="left" color={"blue.500"}>
                Boas Vindas!
            </Titulo>
            <Box borderWidth={2} borderColor="gray.200" p={3} pb={6}  mt={5} borderRadius={8}>
                <EntradaTexto
                placeholder="Digite a especialidade"
                />
                <EntradaTexto
                placeholder="Digite a sua localização"
                />
                <Botao onPress={() => navigation.navigate('Tabs')} mt={4}> Buscar</Botao>
            
            </Box>

            <Titulo color="blue.800" alignSelf="center">Depoimentos</Titulo>
            <VStack space={3} divider={<Divider />} w="100%">
            {
                Depoimentos.map(depoimento => (
                <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                    <Texto>
                    {depoimento.text}
                    </Texto>
                    <TituloTexto>{depoimento.titulo}</TituloTexto>
                </Box>
                ))
            }
            </VStack>

            </VStack>  
        </ScrollView>
        
    )
}