import { ListGroup } from 'react-bootstrap'
import { Book } from '../types/book'

// le props sono sempre un oggetto

interface SingleBookProps {
  book: Book
}

const SingleBook = ({ book }: SingleBookProps) => {
  return (
    <ListGroup.Item key={book.id}>{book.title.toLowerCase()}</ListGroup.Item>
  )
}

export default SingleBook
