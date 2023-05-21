import React, { useEffect, useState } from 'react'
import { Text, Flex, VStack, HStack, Image } from '@chakra-ui/react'
import { listaIntegrantes } from '../assets/listaIntegrantes'

function Integrante({integrante}) {

  const [miembro, setMiembro] = useState([])
  const fotoVacia = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  useEffect(()=>{
    setMiembro(listaIntegrantes.find(mie => mie.id === integrante))
  },[integrante])

  console.log(miembro)
  return (
    <Flex flexDir='column' fontFamily='sans-serif' alignItems='center' justifyContent='center' >
      <Text as='b' fontSize='1.7rem' mt='1rem'>Barra Lateral</Text>
      <VStack border='2px' borderStyle='dashed' m='10px 10px 20px '>
        <HStack>
          <Text fontSize='1.2rem' as='b' p='9px 0 0'>Apodo:</Text>
          <Text p='10px 0 0'> {!miembro ? '-' : miembro.apodo} </Text>
        </HStack>
        <Image src={!miembro ? fotoVacia : miembro.foto} w='60%' border='2px' borderColor='orange' borderStyle='outset'/>
        <Text fontSize='1.2rem' as='b'>Descripción</Text>
        <Text p='0 10px 10px'>{!miembro ? '...' : miembro.descripcion}</Text>
      </VStack>
    </Flex>
  )
}

export default Integrante