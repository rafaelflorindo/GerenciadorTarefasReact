import { useState } from 'react';
import './index.css';

function CadastrarTarefa() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('')
    const [responsavel, setResponsavel] = useState('')

    function cadastrarTarefa(e){
        e.preventDefault()
        console.log("Tarefa: " + titulo)
        console.log("Responsável: " + responsavel)
        console.log("Descrição: " + descricao)
    }
    return (
        <main>
            <header>
                <h1>Nova Tarefa</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de tarefas</h2>
                <p>Entre com todos os campos!!!</p>

                <div className='formulario'>
                    <form onSubmit={cadastrarTarefa}>
                        <label>Nome da Tarefa</label>
                        <input type="text" value={titulo} onChange={e=>setTitulo(e.target.value)} />
                        
                        <label>Descrição</label>
                        <textarea value={descricao} onChange={e=>setDescricao(e.target.value)} ></textarea>
                        
                        <label>Responsável</label>
                        <input type="text" value={responsavel} onChange={e=>setResponsavel(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarTarefa;