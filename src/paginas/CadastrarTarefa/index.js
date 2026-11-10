import { useState } from 'react';
import './index.css';
import tarefas from '../../mook/tarefas'
import { useNavigate } from 'react-router-dom';

function CadastrarTarefa() {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [error, setError] = useState('')

    function cadastrarTarefa(e) {
        e.preventDefault()

        if (!titulo.trim()) {
            setError("O campo TÍTULO não pode estar vazio!!!");
            return;
        }
        if (!descricao.trim()) {
            setError("O campo DESCRIÇÃO não pode estar vazio!!!");
            return;
        }
        if (!responsavel.trim()) {
            setError("O campo RESPONSÁVEL não pode estar vazio!!!");
            return;
        }

        try {
            const addTarefa = {
                'id': tarefas.length + 1,
                'titulo': titulo,
                'descricao': descricao,
                'responsavel': responsavel
            }

            tarefas.push(addTarefa);
            setTitulo("");
            setResponsavel("");
            setDescricao("");

            navigate(-1)
        } catch (error) {
            console.log("Erro ao cadastrar tarefa: " + error)
        }
    }

    return (
        <main>
            <header>
                <h1>Nova Tarefa</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de tarefas</h2>
                <p>Entre com todos os campos!!!</p>
                {
                  error && (
                    <div className='error'>
                        <p className='textoError'>{error}</p>
                    </div>
                  )  
                }             
                <div className='formulario'>
                    <form onSubmit={cadastrarTarefa}>
                        <label>Nome da Tarefa</label>
                        <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />

                        <label>Descrição</label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} ></textarea>

                        <label>Responsável</label>
                        <input type="text" value={responsavel} onChange={e => setResponsavel(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarTarefa;