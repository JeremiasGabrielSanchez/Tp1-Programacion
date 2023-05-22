import React from 'react'
import { Flex, Text, HStack, Input} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

function LogIn() {
  return (
      <Flex flexDir='column' alignItems='center' m='3rem auto' bg='blue.100'
      border='3px' borderColor='blue.500' borderStyle='outset' borderRadius='10px' w='50%'
      fontFamily='sans-serif' fontSize='1.2rem' as='b'>
        <Text m='1rem' fontSize='2rem'> Login In </Text>

        <Flex flexDir='column' w='80%'>
          <Text fontSize='1rem'>
            Correo Electronico
          </Text>
          <Input name='email' type='email'
            placeholder='pepe@hotmail.com' _placeholder={{ textAlign:'center'}} 
            border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
            textAlign='center' w='100%' bg='white'/>
        </Flex>

        <Flex flexDir='column' w='80%' mt='2rem'>
          <Text fontSize='1rem'>
            Contraseña
          </Text>
          <Input name='password' type='password'
            placeholder='***********' _placeholder={{ textAlign:'center'}} 
            border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
            textAlign='center' w='100%' bg='white'/>
        </Flex>

        <Flex fontSize='1.2rem' m='2rem 0 1rem' border='2px' p='10px' borderRadius='10px' _hover={{boxShadow:'0px 1px 3px #000000d7'}} bg='white'> 
          <NavLink to='/tela'> Ingresar </NavLink>
        </Flex>

        <HStack color='blue.700' mb='2rem'>
          <Text color='black'>No tengo una </Text> 
          <NavLink to='/singup'> Cuenta </NavLink>
        </HStack>
      </Flex>
  )
}

export default LogIn