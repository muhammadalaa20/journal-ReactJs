
export default function Nav() {
    const cardColor= document.querySelectorAll('.card')
    return (
        <nav className="navbar flex flex-row justify-between items-center p-2 bg-white shadow-lg">
            <div className="flex flex-row justify-center items-center">
            <img src="/mountain.svg" alt="logo" className="w-10 mr-2 animate-bounce" />
            <p className="text-2xl font-bold text-black nav--tittle">Travel Journal</p>
            </div>
            <div>
                <img src="/moon.svg" alt="dark mode" className="w-12 moon" 
                onClick={
                    () => {
                        document.getElementsByClassName('moon')[0].classList.toggle('hidden')
                        document.getElementsByClassName('sun')[0].classList.toggle('hidden')
                        document.querySelector('.navbar').classList.toggle('bg-white')
                        document.querySelector('.navbar').classList.toggle('bg-black')
                        document.querySelector('.navbar p').classList.toggle('text-white')
                        document.querySelector('.navbar p').classList.toggle('text-black')
                        document.body.style.backgroundColor = '#1F1F1F'
                        cardColor.forEach(card => {
                            card.classList.toggle('bg-black')
                            card.classList.toggle('bg-white')
                            card.classList.toggle('text-white')
                            card.classList.toggle('text-black')
                        })
                    }
                } />
                <img src="/sun.svg" alt="light mode" className="w-12 hidden sun" onClick={
                    () => {
                        document.getElementsByClassName('moon')[0].classList.toggle('hidden')
                        document.getElementsByClassName('sun')[0].classList.toggle('hidden')
                        document.querySelector('.navbar').classList.toggle('bg-white')
                        document.querySelector('.navbar').classList.toggle('bg-black')
                        document.querySelector('.navbar p').classList.toggle('text-black')
                        document.querySelector('.navbar p').classList.toggle('text-white')
                        document.body.style.backgroundColor = 'white'
                        cardColor.forEach(card => {
                            card.classList.toggle('bg-black')
                            card.classList.toggle('bg-white')
                            card.classList.toggle('text-white')
                            card.classList.toggle('text-black')
                        })
                    }
                } />
            </div>
        </nav>
    )
}