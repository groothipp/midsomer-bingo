import { For } from 'solid-js'
import { Title, Link } from "@solidjs/meta";

import Cell from '~/components/cell'
import cell_db from '~/list.db?raw'

const Home = () => {

  const get_cells = (): string[] => {
    const list: string[] = cell_db.split('\n').filter(line => line.trim() !== '')
    const shuffled: string[] = [...list].sort(() => Math.random() - 0.5)

    let cells: string[] = shuffled.slice(0, 25);
    cells[12] = 'FREE'

    return cells
  }

  return (
    <main>
      <Title>Midsomer Bingo</Title>
      <Link rel='icon' type='image/png' href='/icon.png' />
      <h3>midsomer</h3>
      <div class='bingo-board'>
        <h1>B</h1>
        <h1>I</h1>
        <h1>N</h1>
        <h1>G</h1>
        <h1>O</h1>
        <For each={get_cells()}>{
          (text) => <Cell text={text} />
        }</For>
      </div>
    </main>
  );
}

export default Home;