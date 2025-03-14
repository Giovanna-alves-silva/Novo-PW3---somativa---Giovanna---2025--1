import React from 'react';
import { useState } from 'react';
import style from './CreateBook.module.css'

import Input from '../form/Input';
import Select from '../form/Select';
import Button from '../form/Button';

const CreateBook = () => {
    /*CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const [book, setBook] = useState({});
    
    //CAPTURA DE DADOS DOS ELEMENTOS DE INPUT
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    //CAPTURA DE DADOS DOS ELEMENTOS DE SELECT
    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }

    //ENVIO DOS DADOS PARA A API
    function submit(event) {
        event.preventDefault();
        console.log(book);
    }  
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>
                <Input
                    type='Nome do livro'
                    name='txt_livro'
                    id='txt_livro'
                    placeholder='Digite o nome do livro'
                    handlerChange={handlerChangeBook}
                />

                <Input
                    type='Autor do livro'
                    name='txt_autor'
                    id='txt_autor'
                    placeholder='Digite o nome do autor'
                    handlerChange={handlerChangeBook}
                />

                <Input
                    type='Descrição do livro'
                    name='txt_descricao'
                    id='txt_descricao'
                    placeholder='Digite a descricao do livro'
                    handlerChange={handlerChangeBook}
                />

                <Select 
                    name='slc_categoria'
                    id='slc_categoria'
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