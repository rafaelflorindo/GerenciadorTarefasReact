import './index.css'
import ListarTarefas from './ListarTarefas';

function Home() {
    return (
        <main>
            <header>
            <h1>Home</h1>
            </header>
            <section>
                <ListarTarefas />
            </section>
        </main>
    )
}

export default Home;