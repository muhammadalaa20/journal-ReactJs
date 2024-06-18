import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import data from './data'
export default function App() {
  const card = data.map(item => {
    return (
    <Cards 
          key={item.id} 
          {...item}
    />)
  })
  return (
    <>
    <Nav/>
    <section className='card--list'>
      {card}
    </section>
    </>
  )
}

