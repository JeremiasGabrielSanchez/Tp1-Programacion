import React, { useState } from 'react'
import { Grid, GridItem, Text, Flex, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import Integrante from './Integrante'

function Container() {

  const [integrante, setIntegrante] = useState(0)
  console.log(integrante)
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      borderBottom='2px' borderColor='yellow.500'
      boxShadow='2px 2px 5px #000000d7'
    >
      <GridItem 
      colSpan={2} bg='blackAlpha.300' display='flex'
      borderRight='2px' borderColor='yellow.500'
      >

        <Flex 
        flexDir='column' alignItems='center' justifyContent='center'
        w='50%' m='auto' p='.5rem'
        fontFamily='sans-serif' as='b' fontSize='1.2rem'
        border='2px' borderStyle='dashed'

        >

          <Text fontSize='1.7rem' as='u' mb='.5rem'> Integrantes </Text>

          <List spacing={3}>
            <ListItem onClick={()=>setIntegrante(1)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}>
              <ListIcon as={CheckCircleIcon} color='green'/>
              Abraham Jesús
            </ListItem>

            <ListItem onClick={()=>setIntegrante(2)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}>
              <ListIcon as={CheckCircleIcon} color='green'/>
              Amenda Agustín
            </ListItem>

            <ListItem onClick={()=>setIntegrante(3)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}> 
              <ListIcon as={CheckCircleIcon} color='green'/>
              Savino Ricardo
            </ListItem>

            <ListItem onClick={()=>setIntegrante(4)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}>
              <ListIcon as={CheckCircleIcon} color='green'/>
              Sánchez Jeremías
            </ListItem>

            <ListItem onClick={()=>setIntegrante(5)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}>
              <ListIcon as={NotAllowedIcon} color='red'/>
              Fernandez Enzo
            </ListItem>

            <ListItem onClick={()=>setIntegrante(6)} _hover={{fontSize:'1.1rem', color:'blackAlpha.700', cursor: 'pointer'}}>
              <ListIcon as={NotAllowedIcon} color='red'/>
              Messi Leonel
            </ListItem>
          </List>

        </Flex>
      </GridItem>

      <GridItem bg='blackAlpha.500'>
        <Integrante integrante={integrante}/>
      </GridItem>
    </Grid>
    
  )
}

export default Container