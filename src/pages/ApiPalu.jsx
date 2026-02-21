import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgPalu from '../assets/products/apipalu.jpg.png'
import { CheckCircle2, FlaskConical, Award, ShieldCheck, MessageCircle } from 'lucide-react'

export default function ApiPalu() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Navbar />
      <section className="bg-green-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-6">API-PALU : L'Innovation Béninoise</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Le premier phytomédicament antipaludéen issu de la recherche locale, médaillé d'or à Genève et reconnu mondialement.
            </p>
            <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl">
              <MessageCircle size={20} /> Commander sur WhatsApp
            </button>
          </div>
          <div className="flex-1 flex justify-center" data-aos="zoom-in">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl">
              <img src={imgPalu} alt="API-PALU" className="h-72 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Une efficacité scientifiquement prouvée</h2>
            <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
              <FlaskConical className="text-green-600 shrink-0" size={32} />
              <p className="text-gray-700 leading-relaxed"><strong>Action Rapide :</strong> Agit sur les parasites plasmodium dès les premières prises.</p>
            </div>
            <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
              <Award className="text-green-600 shrink-0" size={32} />
              <p className="text-gray-700 leading-relaxed"><strong>Reconnaissance :</strong> Breveté par l'OAPI et primé internationalement pour son innovation.</p>
            </div>
          </div>
          <div className="bg-blue-900 text-white p-10 rounded-[3rem] relative overflow-hidden shadow-2xl text-center">
             <h3 className="text-2xl font-bold mb-6 italic">"La solution africaine au fléau du paludisme."</h3>
             <p className="text-blue-100 leading-relaxed">
               Dr Valentin Agon a consacré sa carrière à transformer la biodiversité béninoise en solutions de santé accessibles à tous.
             </p>
             <div className="mt-8 pt-8 border-t border-white/10 font-bold">DR VALENTIN AGON</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}