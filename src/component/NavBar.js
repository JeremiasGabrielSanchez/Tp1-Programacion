import React from 'react'
import {NavLink} from "react-router-dom";
import { Text, Flex, Grid, GridItem } from '@chakra-ui/react'

function NavBar({titulo}) {
  return (
    <Flex w='100%'>
      <Flex 
        flexDir='column' alignItems='center' justifyContent='center' 
        fontFamily='sans-serif' as='b' w='100%'
        bgColor='blackAlpha.800' border='2px' borderColor='yellow.500'
        boxShadow='2px 2px 5px #000000d7'
        display={['none', 'none','flex', 'flex']}
      >
        <Flex bgGradient='linear(to-r, blackAlpha.300, blue.400, blackAlpha.300)' w='100%' borderBottom='2px' borderColor='yellow.500'>
          <Text m='.5rem auto .5rem auto' fontSize='2rem'> 
            {titulo}
          </Text>
        </Flex>

        <Grid 
        templateColumns='repeat(3, 1fr)' 
        gap={20} 
        display='flex'
        textAlign='center' 
        w='80%' 
        alignItems='center' 
        >
          <GridItem w='80%' h='10' bg='blue.500' border='2px' m='2px'
          _hover={{ height:'38px', backgroundColor:'blue.600'}}>
            <NavLink to='/'>
              <Text pt='2'> Home Page </Text>
            </NavLink>
            
          </GridItem>
          <GridItem w='80%' h='10' bg='blue.500' border='2px' m='2px'
          _hover={{ height:'38px', backgroundColor:'blue.600'}}>
            <NavLink to='/login'>
              <Text pt='2'> Login In </Text>
            </NavLink>
          </GridItem>

          <GridItem w='80%' h='10'  bg='blue.500' border='2px' m='2px'
          _hover={{ height:'38px', backgroundColor:'blue.600'}}>
            <NavLink to='/singup'>
              <Text pt='2'> Sing Up </Text>
            </NavLink>
          </GridItem>
        </Grid>
      </Flex>

{/* ------------------------------------------------------------------------------------------------------------------- */}

      <Flex 
        flexDir='column' alignItems='center' justifyContent='center' w='100%'
        fontFamily='sans-serif' as='b' 
        bgColor='blackAlpha.800' border='2px' borderColor='yellow.500'
        boxShadow='2px 2px 5px #000000d7'
        display={['flex', 'flex', 'none', 'none']}
      >
        <Flex bgGradient='linear(to-r, blackAlpha.300, blue.400, blackAlpha.300)' w='100%' borderBottom='2px' borderColor='yellow.500'>
          <Text m='.5rem auto .5rem auto' fontSize='1.5rem'> 
            {titulo}
          </Text>
        </Flex>

        <Grid 
        templateColumns='repeat(3, 1fr)' 
        gap={15} 
        display='flex'
        textAlign='center' 
        w='80%' 
        alignItems='center' 
        fontSize='90%'
        >
          <GridItem w='80%' h='7' bg='blue.500' border='2px' m='2px'
          _hover={{ height:'26px', backgroundColor:'blue.600'}}>
            <NavLink to='/'>
              <Text pt='1.2'> Home Page </Text>
            </NavLink>
            
          </GridItem>
          <GridItem w='80%' h='7' bg='blue.500' border='2px' m='2px'
          _hover={{ height:'26px', backgroundColor:'blue.600'}}>
            <NavLink to='/login'>
              <Text pt='1.2'> Login In </Text>
            </NavLink>
          </GridItem>

          <GridItem w='80%' h='7'  bg='blue.500' border='2px' m='2px'
          _hover={{ height:'26px', backgroundColor:'blue.600'}}>
            <NavLink to='/singup'>
              <Text pt='1.2'> Sing Up </Text>
            </NavLink>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default NavBar