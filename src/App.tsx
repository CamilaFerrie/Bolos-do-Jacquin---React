import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./Pages/home/Home";
import ListaProdutos from "./Pages/listaProdutos/ListaProdutos";
import AdmProdutos from "./Pages/admProdutos/AdmProdutos";
import DetProduto from "./Pages/detProduto/DetProduto";
import Login from "./Pages/login/Login";



export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<ListaProdutos/>}/>
                <Route path="/admprodutos" element={<AdmProdutos/>}/>
                <Route path="/detalheProduto" element={<DetProduto/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" 
                element={
                    <div>
                        <img className="container-notfound" src="https://www.lindt.ca/media/wysiwyg/gif-404-slow.gif" alt="Imagem de não encontrado"/>
                    </div>
                }
                />
            </Routes>
            <Footer />
        </>
    )
}