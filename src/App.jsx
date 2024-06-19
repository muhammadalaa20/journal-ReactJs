import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'
export default function App() {
  const Cards = data.map(item => {
    return (
    <Card
          key={item.id}
          {...item}
    />)
  })
  return (
    <>
    <Nav/>
    <section className='card--list p-10 flex flex-col justify-center items-center gap-3'>
      {Cards}
    </section>
    </>
  )
}

