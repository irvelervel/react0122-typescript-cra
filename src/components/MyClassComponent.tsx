import { Component } from 'react'

// MyClassComponent, come tutti i componenti React, di default si aspettano
// di ricevere come props un oggetto vuoto, questa è la loro tipizzazione di default

interface MyClassComponentProps {
  subTitle: string
  value?: boolean
}

interface MyClassComponentState {
  name: string
}

class MyClassComponent extends Component<
  MyClassComponentProps,
  MyClassComponentState
> {
  state = {
    name: 'Flavio',
  }

  render() {
    return (
      <div>
        <h1>Hello TypeScript!</h1>
        <h3>{this.props.subTitle}</h3>
        <p onClick={() => this.setState({ name: 'Stefano' })}>
          {this.state.name.toUpperCase()}
        </p>
      </div>
    )
  }
}

export default MyClassComponent
