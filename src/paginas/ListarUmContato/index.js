import './index.css';
import { useParams } from 'react-router-dom';
import contatos from '../../mook/contatos'; //ATUALIZAR

function ListarUmContato(){
    const {id} = useParams();
    /*ATUALIZAR DAS LINHAS ABAIXO*/    
    const contato = contatos.find((item) => String(item.id) === String(id));

    if (!contato) {
        return <p>Contato não encontrada.</p>;
    }

    const { nome, telefone, email, cidade, mensagem } = contato;
    
    return(
        
        <section>
            <header>
                <h1>Listar contato</h1>
            </header>
            <div>
                <h2>#{id} - {nome}</h2>
                <p>Telefone: {telefone}</p>
                <p>E-mail: {email}</p>
                <p>Cidade: {cidade}</p>
                <p>Mensagem: {mensagem}</p>
            </div>
        </section>
        
    )
}

export default ListarUmContato