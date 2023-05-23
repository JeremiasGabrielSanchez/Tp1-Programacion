import React from 'react'
import { Flex, Text, HStack, Input} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

function SingUp() {
  return (
    <Flex
    bgGradient={[
      'linear(to-t, blackAlpha.500, whiteAlpha.500)',
      'linear(to-t, blackAlpha.500, whiteAlpha.500)',
      'linear(to-t, blackAlpha.500, whiteAlpha.500)',
    ]}>
      <Flex flexDir='column' alignItems='center' m='3rem auto' bg='blue.100'
        border='3px' borderColor='blue.500' borderStyle='outset' borderRadius='10px' w='50%'
        fontFamily='sans-serif' fontSize='1.2rem' as='b'
        display={['none', 'none','flex', 'flex']}
        bgGradient={[
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
        ]}>
          <Text m='1rem' fontSize='2rem'> Sing Up </Text>

          <Flex flexDir='column' w='80%'>
            <Text fontSize='1rem'>
              Correo Electronico
            </Text>
            <Input name='email' type='email'
              placeholder='pepe@hotmail.com' _placeholder={{ textAlign:'center'}} 
              border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
              textAlign='center' w='100%' bg='white'/>
          </Flex>

          <Flex flexDir='column' w='80%' mt='1.7rem'>
            <Text fontSize='1rem'>
              Reescribir Correo Electronico
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

          <Flex flexDir='column' w='80%' mt='1.7rem'>
            <Text fontSize='1rem'>
              Reescribir Contraseña
            </Text>
            <Input name='password' type='password'
              placeholder='***********' _placeholder={{ textAlign:'center'}} 
              border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
              textAlign='center' w='100%' bg='white'/>
          </Flex>

          <Flex fontSize='1.2rem' m='2rem 0 1rem' border='2px' p='10px' borderRadius='10px' _hover={{boxShadow:'0px 1px 3px #000000d7'}} bg='white'> 
            <NavLink to='/tela'> Crear </NavLink>
          </Flex>

          <HStack color='blue.700' mb='2rem'>
            <Text color='black'>Ya tengo una </Text> 
            <NavLink to='/login'> Cuenta </NavLink>
          </HStack>
      </Flex>

      {/* --------------------------- */}

      <Flex flexDir='column' alignItems='center' m='3rem auto' bg='blue.100'
        border='3px' borderColor='blue.500' borderStyle='outset' borderRadius='10px' w='80%'
        fontFamily='sans-serif' fontSize='1.2rem' as='b'
        display={['flex', 'flex','none', 'none']}
        bgGradient={[
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
          'linear(to-t, blackAlpha.500, whiteAlpha.500)',
        ]}>
          <Text m='1rem' fontSize='2rem'> Sing Up </Text>

          <Flex flexDir='column' w='80%'>
            <Text fontSize='1rem'>
              Correo Electronico
            </Text>
            <Input name='email' type='email'
              placeholder='pepe@hotmail.com' _placeholder={{ textAlign:'center'}} 
              border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
              textAlign='center' w='100%' bg='white'/>
          </Flex>

          <Flex flexDir='column' w='80%' mt='1.7rem'>
            <Text fontSize='1rem'>
              Reescribir Correo Electronico
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

          <Flex flexDir='column' w='80%' mt='1.7rem'>
            <Text fontSize='1rem'>
              Reescribir Contraseña
            </Text>
            <Input name='password' type='password'
              placeholder='***********' _placeholder={{ textAlign:'center'}} 
              border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}
              textAlign='center' w='100%' bg='white'/>
          </Flex>

          <Flex fontSize='1.2rem' m='2rem 0 1rem' border='2px' p='10px' borderRadius='10px' _hover={{boxShadow:'0px 1px 3px #000000d7'}} bg='white'> 
            <NavLink to='/tela'> Crear </NavLink>
          </Flex>

          <HStack color='blue.700' mb='2rem'>
            <Text color='black'>Ya tengo una </Text> 
            <NavLink to='/login'> Cuenta </NavLink>
          </HStack>
      </Flex>
    </Flex>
  )
}

export default SingUp