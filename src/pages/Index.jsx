import React from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaDiscord, FaGlobe, FaCar, FaUsers, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg={bg} color={color}>
          <Heading fontSize="xl" mb={4}>
            Welcome to Our GTAV Roleplay Server
          </Heading>
          <Text mb={4}>Dive into the ultimate GTA V roleplaying experience where you can live out your virtual life in our custom-built world. Join a community of passionate players in a world where every decision matters and every interaction counts.</Text>
          <Image src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndGF2JTIwcm9sZXBsYXklMjBzZXJ2ZXJ8ZW58MHx8fHwxNzA4NzE2NzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} />
          <HStack spacing={4}>
            <Button leftIcon={<FaDiscord />} colorScheme="blue">
              Join on Discord
            </Button>
            <Button leftIcon={<FaGlobe />} colorScheme="teal">
              Visit Website
            </Button>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg={bg} color={color}>
          <Heading fontSize="xl" mb={4}>
            Features
          </Heading>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <Icon as={FaCar} w={6} h={6} />
              <Text>Custom Vehicles</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaUsers} w={6} h={6} />
              <Text>Dynamic Factions</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaInfoCircle} w={6} h={6} />
              <Text>Detailed Rules & Guidelines</Text>
            </HStack>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg={bg} color={color}>
          <Heading fontSize="xl" mb={4}>
            Join Us
          </Heading>
          <Text mb={4}>Ready to start your journey? Click below to apply for our server whitelist and become part of our growing community.</Text>
          <Button colorScheme="green" size="lg">
            Apply Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
