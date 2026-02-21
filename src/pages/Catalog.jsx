import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsGrid from '../components/ProductsGrid'

export default function Catalog() {
  return (
    <div className="pt-20">
      <Navbar />
      <div className="bg-blue-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Catalogue Complet</h1>
        <p className="mt-4 text-blue-200">Découvrez l'intégralité de nos solutions de phytothérapie scientifique.</p>
      </div>
      {/* On réutilise ici la grille complète que nous avions faite précédemment */}
      <ProductsGrid />
      <Footer />
    </div>
  )
}