import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './CreateBook.module.css'

import Input from '../form/Input';
import Select from '../form/Select';
import Button from '../form/Button';

const CreateBook = () => {
    /*CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const [book, setBook] = useState({});
    
    const [categories, setCategories] = useState([]);

    //CAPTURA DE DADOS DOS ELEMENTOS DE INPUT
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    //CAPTURA DE DADOS DOS ELEMENTOS DE SELECT
    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text})
    }

    //ENVIO DOS DADOS PARA A API
    function submit(event) {
        event.preventDefault();
        console.log(book);
    }  

    /* RECUPERA OS DADOS DE CATEGORIA DA APIREST */
    useEffect(() => {
        fetch('http://http://127.0.0.1:5000/listagemCateorias', {
            method: '',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            }
        }).then((response) => 
            response.json()
        ).then((categorias)=> {
            console.log('TESTE: ' + categorias.data);
        }).catch((error) =>{
            console.log('ERRO: ' + error);
        })
            

    }, []);

    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>
                <Input
                    type='Nome do livro'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o nome do livro'
                    handlerChange={handlerChangeBook}
                />

                <Input
                    type='Autor do livro'
                    name='autor_livro'
                    id='autor_livro'
                    placeholder='Digite o nome do autor'
                    handlerChange={handlerChangeBook}
                />

                <Input
                    type='Descrição do livro'
                    name='descricao_livro'
                    id='descricao_livro'
                    placeholder='Digite a descricao do livro'
                    handlerChange={handlerChangeBook}
                />

                <Select 
                    name='cod_categoria'
                    id='cod_categoria'
                    text='Categoria do livro'
                    handlerChange={handlerChangeCategory}
                />

                <Button
                    label='CADASTRAR LIVRO'
                />
            </form>

        </section>

    )
}

export default CreateBook