import { Container, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
  const { fetchProducts, products } = useProductStore()
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log('products', products)

  return (
    <Container
      maxW='container.xl'
      py={12}
    >
      <VStack spacing={8}>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={'30'}
          fontWeight='bold'
          textAlign={'center'}
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w='full'
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            bgGradient='linear(to-l, #5f5469ff, #56718eff)'
            bgClip='text'
            fontSize={'xl'}
            fontWeight='bold'
            textAlign={'center'}
          >
            No products Found {''}
            <Link to={'/create'}>
              <Text
                as='span'
                color='black'
                _hover={{ textDecoration: 'underline' }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}
