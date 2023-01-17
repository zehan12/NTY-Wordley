import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import Header from './Header'
import WordRow from './WordRow'


function App() {

  const STATE = useSelector((state) => state);

  const [ guess, setGuess ] = useState(STATE.guess);
  // console.log(store)
  return (
    <Fragment>
      <Header />

      <div className='mx-auto bg-white w-96 relative h-screen'>
        <h1 className='text-6xl font-mono'>{guess}</h1>

        <main className="grid grid-rows-6 gap-4 mt-6">
          <WordRow lettersProps="fucku" />
          <WordRow lettersProps='fucku' />
          <WordRow lettersProps='fucku' />
          <WordRow lettersProps='fucku' />
          <WordRow lettersProps='fucku' />
        </main>
      </div>
    </Fragment>
  )
}

export default App
