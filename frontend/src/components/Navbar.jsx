import { Button, Container, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <Container
      maxW={'1140px'}
      px={4}
    >
      <Flex
        h={16}
        align={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={{ base: '22', sm: '28' }}
          fontWeight='bold'
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          <Link to={'/'}>Product store</Link>
        </Text>
        <Link to={'/create'}>
          <Button>
            <PlusSquareIcon fontSize={20} />
          </Button>
        </Link>
      </Flex>
    </Container>
  )
}
