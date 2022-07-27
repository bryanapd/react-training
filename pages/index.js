import { Fragment, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Heading, Input, Stack } from '@chakra-ui/react'

const list = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon"
]
export default function Home() {
  const [filter, setFilter] = useState(list)

  const handleSearch = (event) => {
    if(event.target.value == ''){
      return setFilter(list)
    }
    const filteredValues = list.filter(f => f.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilter(filteredValues)
  }

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" minH="90vh" border="2px solid black">
      <Input type="text" onChange={handleSearch} variant="filled" size="lg" placeholder="Search" />
      <Stack>
        {
          filter && filter.map((f, fKey) => <Heading key={fKey}>{f}</Heading>)
        }
      </Stack>
    </Box>
  )
}
