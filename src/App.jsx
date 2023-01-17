import { Fragment, useState } from 'react'
import Header from './Header'
import WordRow from './WordRow'

function App() {
  return (
    <Fragment>
      <Header />
      {/* <div className="mx-auto w-96 relative h-screen"> */}
      {/* <header className="border-b border-gray-400 py-4">
        <h1 className="text-3xl font-bold text-center uppercase">Wordle</h1>
      </header> */}

      {/* </div> */}

      <div className='mx-auto bg-white w-96 relative h-screen'>
        <main className="grid grid-rows-6 gap-1">
          <WordRow lettersProps="f" />
          <WordRow lettersProps='fu' />
          <WordRow lettersProps='fuc' />
          <WordRow lettersProps='fuck' />
          <WordRow lettersProps='fucku' />
        </main>
      </div>

    </Fragment>
  )
}

export default App
