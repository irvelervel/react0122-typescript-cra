// 'https://striveschool-api.herokuapp.com/food-books'

import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Book } from '../types/book'
import SingleBook from './SingleBook'

const FetchComponent = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        setBooks(data)
      } else {
        console.log('something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>FETCH EXAMPLE</h2>
      <ListGroup style={{ color: '#000' }}>
        {books.map((book, i) => (
          <SingleBook book={book} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent
