import Banner from './components/Banner'
import Cart from './components/Cart'
import './styles/index.css'

function App() {
  return (
    <div className="app">
      <Banner />
      <main className="lmj-main">
        <section className="lmj-content">
          <h2>Bienvenue à La maison jungle</h2>
          <p>
            Découvrez notre sélection de plantes et profitez d&apos;une interface
            React simple pour l&apos;atelier de styles et d&apos;assets.
          </p>
        </section>
        <Cart />
      </main>
    </div>
  )
}

export default App
