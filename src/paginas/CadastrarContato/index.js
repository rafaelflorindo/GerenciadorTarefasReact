import { useState } from 'react';
import './index.css';
import contatos from '../../mook/contatos'
import { useNavigate } from 'react-router-dom';

function CadastrarContato() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [conteudo, setConteudo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    function cadastrarContato(e) {
        e.preventDefault()

        if (!nome.trim()) {
            setError("O campo TÍTULO não pode estar vazio!!!");
            return;
        }
        if (!conteudo.trim()) {
            setError("O campo DESCRIÇÃO não pode estar vazio!!!");
            return;
        }
        if (!telefone.trim()) {
            setError("O campo RESPONSÁVEL não pode estar vazio!!!");
            return;
        }
        if (!cidade.trim()) {
            setError("O campo CIDADE não pode estar vazio!!!");
            return;
        }
        if (!email.trim()) {
            setError("O campo E-MAIL não pode estar vazio!!!");
            return;
        }
        try {
            const addContato = {
                'id': contatos.length + 1,
                'nome': nome,
                'conteudo': conteudo,
                'telefone': telefone,
                'cidade': cidade,
                'email': email
            }

            contatos.push(addContato);
            setNome("");
            setTelefone("");
            setConteudo("");
            setCidade("")
            setEmail("")

            navigate(-1)
        } catch (error) {
            console.log("Erro ao cadastrar contato: " + error)
        }
    }

    return (
        <main>
            <header>
                <h1>Novo Contato</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de contatos</h2>
                <p>Entre com todos os campos!!!</p>
                {
                  error && (
                    <div className='error'>
                        <p className='textoError'>{error}</p>
                    </div>
                  )  
                }             
                <div className='formulario'>
                    <form onSubmit={cadastrarContato}>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

                        <label>Telefone</label>
                        <input type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} />

                        <label>Cidade</label>
                        <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} />

                        <label>E-mail</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                        <label>Mensagem:</label>
                        <textarea value={conteudo} onChange={e => setConteudo(e.target.value)} ></textarea>

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarContato;