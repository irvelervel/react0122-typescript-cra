import { ChangeEvent, FormEvent, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

type ValidInputValue = string | boolean

const BootstrapComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChange = (
    value: ValidInputValue,
    func: (v: ValidInputValue) => void
  ) => {
    func(value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(location.pathname)
    alert('OK!')
    // come redirectiamo l'utente a "/" ?
    navigate('/')
  }

  return (
    <div>
      {/* <Alert variant="success">React-bootstrap test</Alert>
      <Button disabled size="sm" variant="dark">
        CLICK ME
      </Button> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              handleChange(
                e.target.value,
                setEmail as (inputValue: ValidInputValue) => void
              )
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              handleChange(
                e.target.value,
                setPassword as (inputValue: ValidInputValue) => void
              )
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={check}
            onChange={(e) =>
              handleChange(
                e.target.checked,
                setCheck as (inputValue: ValidInputValue) => void
              )
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default BootstrapComponent
