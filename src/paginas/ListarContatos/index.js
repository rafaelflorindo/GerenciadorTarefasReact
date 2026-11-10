import './index.css'
import contatos from '../../mook/contatos';
import {Link} from 'react-router-dom';

function ListarContatos() {
    return (
        <main>
            <header>
                <h1>Contatos envidos</h1>
            </header>

            <section>
                <div>
                    <p>Foram encontrados {contatos.length} contatos.</p>
                    <Link to={"/cadastrarContato"}>+ Contato</Link>
                </div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>NOME</th>
                            <th>TELEFONE</th>
                            <th>E-MAIL</th>
                            <th>VER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contatos.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={`/contato/${item.id}`}>Ver</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default ListarContatos;