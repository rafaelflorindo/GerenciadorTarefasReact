import './index.css';
import { useParams } from 'react-router-dom';
import tarefas from '../../mook/tarefas'; //ATUALIZAR

function ListarUmaTarefa(){
    const {id} = useParams();
    /*ATUALIZAR DAS LINHAS ABAIXO*/    
    const tarefa = tarefas.find((item) => String(item.id) === String(id));

    if (!tarefa) {
        return <p>Tarefa não encontrada.</p>;
    }

    const { titulo, responsavel, descricao } = tarefa;
    
    return(
        
        <section>
            <header>
                <h1>Listar Tarefa</h1>
            </header>
            <div>
                <h2>#{id} - {titulo}</h2>
                <p>Responsável: {responsavel}</p>
                <p>{descricao}</p>
            </div>
        </section>
        
    )
}

export default ListarUmaTarefa