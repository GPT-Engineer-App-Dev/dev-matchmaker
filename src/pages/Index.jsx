import { Box, Flex, Heading, Input, Button, Text, Tag, VStack, HStack } from '@chakra-ui/react';
import { useState } from 'react';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Bob Smith', location: 'Berlin, Germany', technologies: ['Vue', 'Django'] },
  { id: 3, name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Angular', 'Ruby on Rails'] }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);

  const handleSearch = () => {
    const filtered = developers.filter(dev => 
      dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredDevelopers(filtered);
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading>Particles - Software Talent Marketplace</Heading>
        <Text>Discover and connect with top web technology experts.</Text>
        <HStack>
          <Input placeholder="Search by name, location, or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button onClick={handleSearch}>Search</Button>
        </HStack>
        <VStack spacing={4}>
          {filteredDevelopers.map(dev => (
            <Flex key={dev.id} p={4} boxShadow='md' borderRadius='lg' width='full' justifyContent='space-between'>
              <VStack align='start'>
                <Text fontSize='xl'>{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack>
                  {dev.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
                </HStack>
              </VStack>
              <Button colorScheme='blue'>Message</Button>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;