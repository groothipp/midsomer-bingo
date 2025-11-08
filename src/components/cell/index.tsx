import { Component, JSX, createSignal } from 'solid-js'

import './cell.css'

type Properties = {
  text: string
}

const Cell: Component<Properties> = (props: Properties) => {
  const [selected, setSelected] = createSignal(false)

  const handle_click = () => {
    setSelected(!selected())

    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }

  return <button class={`cell ${selected() ? 'selected' : 'unselected'}`} onClick={() => handle_click()}>
    <p>{props.text}</p>
  </button>
}

export default Cell