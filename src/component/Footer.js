import React from 'react'
import { Text, Flex, HStack, Image, Link, Grid, GridItem  } from '@chakra-ui/react'
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (

      <Grid templateColumns='repeat(3, 1fr)' pt='1rem' pr='.3rem' as='b' 
      bg='blackAlpha.800' border='2px' borderStyle='outset' borderColor='black'
      bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blackAlpha.200, teal.500)',
        'linear(to-b, blackAlpha.100, blue.200)',
      ]}
      color='blue.600' textShadow='1px 1px 1px black'>

        <GridItem colSpan={2} display='flex' alignItems='center' justifyContent='center'>
          <Text fontFamily='sans-serif' fontSize='1.7rem' as='u'>Trabajo practico N°1 - Lista de alumnos</Text>
        </GridItem>

        <GridItem>
          <Flex flexDir='column'>

            <HStack gap={10} border='2px' borderStyle='dashed' p='10px'>
              <Link href='https://www.instagram.com/gsuabransk/'>
                <Image src='https://pps.whatsapp.net/v/t61.24694-24/346000108_160054927031282_2672311596063752444_n.jpg?ccb=11-4&oh=01_AdRjF1KU4fKoo_zRnishYrw7s7k53vSQ9C0v4XHkrunzKA&oe=6476695B' w='70px' border='2px' borderColor='orange' borderStyle='outset' _hover={{boxShadow:'0px 2px 2px black'}}/>
              </Link>
              <Link href='https://www.instagram.com/agustin.amenta/'>
                <Image src='https://pps.whatsapp.net/v/t61.24694-24/255499498_939557096650583_6327062696398145497_n.jpg?ccb=11-4&oh=01_AdTY683-gGjYcAR_KSN5tIf8jQ_yRPR7No1iNEP0kGzzzA&oe=64766A6A' w='70px' border='2px' borderColor='orange' borderStyle='outset' _hover={{boxShadow:'0px 2px 2px black'}}/>
              </Link>
              <Link href='https://www.instagram.com/ricardo_savino16/'>
                <Image src='https://pps.whatsapp.net/v/t61.24694-24/286828200_312355751108755_7244052878366338912_n.jpg?ccb=11-4&oh=01_AdR5guId5mc0GQ_RZvDZiroAyQH9IheQTW2kkF-EgYEj3w&oe=647662B4' w='70px' border='2px' borderColor='orange' borderStyle='outset' _hover={{boxShadow:'0px 2px 2px black'}}/>
              </Link>
              <Link href='https://www.instagram.com/jere_99sanchez/?next=%2F'>
                <Image src='https://pps.whatsapp.net/v/t61.24694-24/344948863_1022646719108375_1094640395448847948_n.jpg?ccb=11-4&oh=01_AdRuaYe2Kj1EHmvaXK46ydQ1XZvS3u_hRO-gLrTdkAZkEQ&oe=647683D1' w='70px' border='2px' borderColor='orange' borderStyle='outset' _hover={{boxShadow:'0px 2px 2px black'}}/>
              </Link>
            </HStack>

            <HStack m='10px 0' fontSize='1.2rem'>
              <FaInstagram />
              <Text fontFamily='sans-serif' fontSize='1rem'> Instagram de los Integrantes</Text>
            </HStack>

          </Flex>
        </GridItem>

      </Grid>
  )
}

export default Footer