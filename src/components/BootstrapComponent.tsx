import { ChangeEvent, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

const BootstrapComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChange = (
    value: string | boolean,
    func: (v: string | boolean) => void
  ) => {
    func(value)
  }

  return (
    <div>
      {/* <Alert variant="success">React-bootstrap test</Alert>
      <Button disabled size="sm" variant="dark">
        CLICK ME
      </Button> */}
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              handleChange(
                e.target.value,
                setEmail as (arg0: string | boolean) => void
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
                setPassword as (arg0: string | boolean) => void
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
                setCheck as (arg0: string | boolean) => void
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
