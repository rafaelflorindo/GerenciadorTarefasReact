import './index.css'
import fotoPerfil from './foto-perfil.jpeg';
import habilidadeDesenvolvedor from './foto-desenvolvedor.png';
import habilidadeEletrecista from './foto-eletrecista.jpeg';
import habilidadeMusica from './foto-musica.png';

function Sobre() {
    return (
        <main>            
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={fotoPerfil} alt=" Foto Perfil"/>
                    <p>Rafael Florindo</p>
          
                    <a 
                        href="https://www.linkedin.com/in/rafaelflorindo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="linkedinLink"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className='habilidades'>
                    <article>
                        <h2>Desenvolvedor</h2>
                        <img src={habilidadeDesenvolvedor} alt="Habilidade de desenvolvedor"/>
                        <p className='descricao'>
                        Profissional de tecnologia com ampla experiência no desenvolvimento full-cycle de aplicações, entregando ecossistemas integrados para web, mobile e desktop.
                        </p>
                    </article>
                    <article>
                        <h2>Eletrecista</h2>
                        <img src={habilidadeEletrecista}  alt="Habilidade de eletrecista"/>
                        <p className='descricao'>
                        Prestação de serviços de inspeção, pequenos reparos e manutenção corretiva e preventiva em quadros de distribuição elétrica residenciais e comerciais.
                        </p>
                    </article>
                    <article>
                        <h2>Música</h2>
                        <img src={habilidadeMusica} alt="Habilidade de música" />
                        <p className='descricao'>
                        Músico profissional com 10 anos de trajetória no violino e 3 anos de experiência como instrutor, oferecendo aulas personalizadas e apresentações de alto nível.                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Sobre;