/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './UpdateBooks.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const UpdateBooks = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
        const [book, setBook] = useState({});

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const {cod_livro} = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categories, setCategories] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeBook(event) {
                setBook({...book, [event.target.name] : event.target.value});
                console.log(book)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeCategory(event) {
                setBook({...book, cod_categoria: event.target.value});
                console.log(book);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemCateorias', {
                        method:'GET',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Headers':'*'
                        },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setCategories(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
        useEffect(()=>{

                fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        console.log('LIVROS: ' + data.data.cod_livro);
                        setBook(data.data);
                        console.log('STATE: ' + book.nome_livro);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        /* ALTERAÇÃO DOS DADOS DE LIVRO */
        function updateBook(book) {
        
                console.log(JSON.stringify(book))
        
                fetch('http://localhost:5000/alterarLivro', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(book)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/listBook',{state:'LIVRO ALTERADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                updateBook(book);
        }

        return (
                <section className={style.create_book_container}>
                        
                        <h1>ALTERAÇÃO DE LIVROS</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_livro'
                                        id='nome_livro'
                                        placeholder='Digite o título do livro'
                                        text='Digite o título do livro'
                                        handlerChange={handlerChangeBook}
                                        value={book.nome_livro} />

                                <Input 
                                        type='text'
                                        name='autor_livro'
                                        id='autor_livro'
                                        placeholder='Digite o nome do autor'
                                        text='Digite o nome do autor'
                                        handlerChange={handlerChangeBook} 
                                        value={book.autor_livro}/>

                                <Input 
                                        type='text'
                                        name='descricao_livro'
                                        id='descricao_livro'
                                        placeholder='Digite uma descrição para  livro'
                                        text='Descrição'
                                        handlerChange={handlerChangeBook}
                                        value={book.descricao_livro} />
                                
                                <Select 
                                        name="categoria_id"
                                        text="Selecione a categoria do livro"
                                        options={categories}
                                        handlerChange={handleChangeCategory} />

                                <Button 
                                label='Editar livro'/>

                        </form>

                </section>
        )
        }

export default UpdateBooks
