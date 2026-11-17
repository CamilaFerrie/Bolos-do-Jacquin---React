import './ListaProdutos.css';
import Card from '../../components/card/Card';
import imgProduto from '../../assets/img/produtos/le_grand_chocolat.png'


function ListaProdutos() {
    return(
        <>
           <main>
        <section className="prod_banner"></section>

        <section className="container prod_container">
            <div className="box_h2">
                <h1>Nossos Bolos</h1>
                <span>Nos Gâteaux</span>
                <hr/>
            </div>

            <div className="prod_cards">
                <Card 
                imgProduto={imgProduto} 
                nome={'Le Grand Chocolat'} 
                descricao={'Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.'} 
                valor={185.00} 
                quantidadeAvaliacoes={10} 
                nota={9.5}
                />
                {/* <article className="prod_card">
                    <figure>
                        <img src={leGrandChocolat} alt="foto do produto"/>
                    </figure>
                    <h2>
                        <Link to="/detalheProduto">
                            Le Grand Chocolatty
                        </Link>
                    </h2>
                    <p className="card_desc">Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.</p>
                    <p className="card_rodape">
                        <data value="185.00">R$ 185,00 / kg</data>
                        <span className="card_av">
                            <img src={usuario} alt="icone de usuarios"/>
                            <data value="10">10</data>
                            <img src={estrela} alt="icone de estrela"/>
                            <data value="9.5">9,5</data>
                        </span>
                    </p>
                </article> */}
            </div>
        </section>
           </main>
        </>
    )

}

export default ListaProdutos;