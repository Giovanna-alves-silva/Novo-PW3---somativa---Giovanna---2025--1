import React from 'react';
import style from './CreateBook.module.css'

import Input from '../form/Input';
import Select from '../form/Select';
import Button from '../form/Button';

const CreateBook = () => {
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>

            <Input
                type='Nome do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite o nome do livro'
            />

            <Input
                type='Autor do livro'
                name='txt_autor'
                id='txt_autor'
                placeholder='Digite o nome do autor'
            />

            <Input
                type='Descrição do livro'
                name='txt_descricao'
                id='txt_descricao'
                placeholder='Digite a descricao do livro'
            />

            <Select 
                name='slc_categoria'
                id='slc_categoria'
                text='Categoria do livro'
            />

            <Button
                label='CADASTRAR LIVRO'
            />

        </section>

    )
}

export default CreateBook