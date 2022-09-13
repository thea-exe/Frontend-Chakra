import * as React from "react"
import {
  ChakraProvider,
  Text,
  theme,
  FormControl,
  FormLabel,
  SimpleGrid,
  Switch,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  Button,
  Stack,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Checkbox,
  Avatar,
  Wrap,
  WrapItem,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"

import { FaShoppingCart } from 'react-icons/fa';
import { ChevronDownIcon } from "@chakra-ui/icons";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box mt="10px"> 
    <Center bg='white' color='white'>
    <Input size="lg" mt="10px" mb="20px" variant="unstyled" placeholder='Search Kinetic...' />
  <FormControl display='flex' alignItems='center'  color="black">
      <Box display="flex" pl="400px">
      <FormLabel htmlFor='email-alerts' mb='0'>
    Dark
  </FormLabel>
  <Switch id='email-alerts' />
  <Text ml="20px" color="black"> Portfolio</Text>
  <Wrap ml="20px">
  <WrapItem>
    <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  </Wrap>
  <Box ml="20px">
  <FaShoppingCart  color="black"/> 
    <Text  color="black">2</Text>
  </Box>
      </Box>
</FormControl>
</Center>
</Box>
<Divider mb="20px" mt="10px"/>

<Box display="flex" padding="5px">
  <Text fontSize="large" mr="10px"> Bored Ape Yacht Club</Text>
  <Text fontSize="md" ml="20px" mr="20px"> Floor Price</Text>
  <Text fontSize="md" ml="20px" mr="20px"> Volume</Text>
  <Text fontSize="md" ml="20px" mr="20px"> Items</Text>
  <Text fontSize="md" ml="20px" mr="20px"> Owners</Text>
  <Text fontSize="md" ml="20px" mr="20px"> 7d Change</Text>
  <Text fontSize="md" ml="20px" mr="20px"> 30d Owners</Text>
</Box>
<Divider mb="20px" mt="10px"/>


    <Stack direction={['row']} spacing='24px'> 
      <Box ml="20px">
      <Text fontSize="large">Filters</Text>
  <FormControl as={SimpleGrid} columns={{ base: 0, lg: 2 }} width="500px">
  <FormLabel htmlFor='isChecked'>Buy Now</FormLabel>
  <Switch id='isInvalid' isInvalid />
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Marketplace
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
  
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Input mb="5px" placeholder='Enter Minimum' />
    <Input mb="5px" placeholder='Enter Maximum' />
    <Button width="100%" colorScheme='black' variant='outline'>Apply</Button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</FormControl>

<Text fontSize="large" mt="20px">Rarity</Text>
<Stack spacing={3}>
  <Input width="230px" placeholder='default placeholder' />
  <Input width="230px" placeholder='default placeholder' />
  <Button width="230px" colorScheme='black' variant='outline'>Apply</Button>
</Stack>

<Divider width="230px" mt="20px" mb="10px"/>

<Text fontSize="large">Attributes</Text>

<Accordion defaultIndex={[0]} allowMultiple width={"230px"}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Trait Count
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Hair Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Eye Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Hat
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          T-Shirt Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>
</Accordion>
</Box>
<Box position="absolute">
<TableContainer ml="350px">
<Input size="md" mt="10px" mb="20px" variant="unstyled" placeholder='Search 782 Bored Ape Yacht Club NFTs...' />
<Menu>
  <MenuButton as={Button} right="200px"rightIcon={<ChevronDownIcon />}>
    Price Ascending
  </MenuButton>
  <MenuList padding="20px">
    <Text>Sort by</Text>
    <Divider mt="5px" mb="5px"></Divider>
    <Menu>
  <MenuButton as={Button} mr="20px" rightIcon={<ChevronDownIcon />}>
    Price
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Price Ascending
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

  </MenuList>
</Menu>

  <Table size="sm" variant='simple' colorScheme="purple" >
    <Thead>
      <Tr>
        <Th> Rarity</Th>
        <Th>List Price</Th>
        <Th >Price</Th>
        <Th>Rarity</Th>
        <Th>List Price</Th>
        <Th >Price</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr><Tr>
        <Td> <Checkbox mr="20px" defaultChecked></Checkbox> inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
</Box>
<Center height='800px'>
  
  <Divider ml="500px"  orientation='vertical' />
</Center>
<Text> dis where da graphs go</Text>
</Stack>
  </ChakraProvider>
  
)

