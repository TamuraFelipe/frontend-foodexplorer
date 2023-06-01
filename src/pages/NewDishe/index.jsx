import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { MdOutlineArrowBackIosNew } from 'react-icons/md'

import { Header } from '../../components/Header';
import { InputFile } from '../../components/InputFile';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import {
    Container,
    Content
} from './styles';

export const NewDishe = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const [category, setCategory] = useState("")
    const [newIngredient, setNewIngredient] = useState([]);
    const [newCategory, setNewCategory] = useState("")
  
    const navigate = useNavigate();    

    const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category_id", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        async function handleNewDishe(e){
            e.preventDefault();
            const imageIsEmpty = image ? "" : "Selecionar uma imagem para o prato!";
            const nameIsEmpty = name ? "" : "Nome do prato não pode ser vazio!";
            const categoryISEmpty = category ? "" : "Selecione uma categoria para o prato!"
            const ingredientsIsEmpty = ingredients.length < 1 ? "Adicione pelo menos 1 ingrediente!" : "";
            const priceIsEmpty = price ? "" : "O Prato precisa de um preço!"
            const descriptionIsEmpty = description ? "" : "O prato precisa de uma descrição!"

            if(imageIsEmpty || nameIsEmpty || categoryISEmpty || ingredientsIsEmpty || priceIsEmpty || descriptionIsEmpty){
                return alert(imageIsEmpty + "\n" + nameIsEmpty + "\n" + categoryISEmpty + "\n" + ingredientsIsEmpty + "\n"+ priceIsEmpty + "\n" + descriptionIsEmpty )
            }
            
            await api
            .post("/dishes", formData)
            .then(alert("Prato adicionado com sucesso!"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao criar o prato!");
                }
            })
            navigate("/")
        }
        async function handleNewCategory(e){
            e.preventDefault();

            const categoryExist = categories.filter( item => item.category === newCategory);
            const categoryIsEmpty = newCategory === '';
            
            if(categoryIsEmpty) {
                return alert("Categoria não pode estar vazia!")
            }
            
            if(categoryExist.length === 0){
                await api
                .post("/categories", {
                    category: newCategory
                })
                .then(alert("Categoria cadastrada com sucesso!"))
                .catch((error) => {
                    if (error.response) {
                       alert(error.response.data.message);
                       return;
                    } else {
                       alert("Erro ao criar o prato!");
                       return;
                    }
                    
                })
                setNewCategory("");
            } else {
                alert("Categoria já existe!")
            }
            
        }
        
        function handleCategoryId(id){
            setCategory(parseInt(id))
        }

        function handleAddIngredient(){
            if(newIngredient === "") {
                return alert("Insira um ingrediente!")
            }
            setIngredients( prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
        function handleRemoveIngredient(deleted){
            setIngredients( prevState => prevState.filter( ingredient => ingredient !== deleted));
        }

        useEffect( () => {
            async function fetchCategories(){
                const categories = await api.get("/categories");
                const data = categories.data;
                setCategories(data);
            }
            fetchCategories();
        }, [newCategory]);
        

  return (
    <>
        <Header disabled/>
        <Container>
            <Content>
                <Link to="/"><MdOutlineArrowBackIosNew />Voltar</Link>
                <div className='new-category'>
                    <h1>Adicionar prato</h1> 
                    <div className='category-insert'>
                        <Input 
                        id={category}
                        title="Nova categoria"
                        type='text'
                        placeholder="Adicione nova categoria"
                        onChange={ ({ target }) => setNewCategory(target.value)}
                        value={newCategory}
                        />
                        <Button 
                        onClick={handleNewCategory}
                        title='Cadastrar'
                        />
                    </div>
                </div>
                
                <div>

                    <InputFile 
                    onChange={e => setImage(e.target.files[0])}
                    title='Selecione imagem'
                    />

                    <Input 
                    id={name}
                    title="Título"
                    type="text"
                    placeholder="Digite o nome do prato"
                    onChange={ ({target}) => setName(target.value)}
                    />

                    <div>
                        <span>Categoria</span>
                        <select name="categories" id="categories" onChange={({target}) => handleCategoryId(target.value)}>
                            <option value="Escolha uma categoria">Escolha uma categoria</option>
                        {   
                            categories.map( ({id, category}) => (
                                <option 
                                key={id} 
                                value={id}
                                >
                                    {category}
                                </option>
                            ))
                        }
                        </select>
                    </div>
                </div>

                <div className='box-02'>
                    <div className='box-ingredients'>
                        <label>Ingredientes</label>
                        <div className='ingredients'>
                            <div>
                                <NoteItem 
                                    /* title="Ingredientes" */
                                    isNew 
                                    placeholder="Novo Ingrediente" 
                                    value={newIngredient}
                                    onChange={ ({ target }) => setNewIngredient(target.value)}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                            {
                                ingredients && ingredients.map( (ingredient, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={ () => handleRemoveIngredient(ingredient)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Input 
                    id={price}
                    title="Preço"
                    type="text"
                    placeholder="R$ 00,00"
                    onChange={ ({target}) => setPrice(target.value)}
                    />
                </div>
                                
                
                
                <TextArea onChange={ ({target}) => setDescription(target.value)}/>
                
                <Button 
                type='button'
                title='Salvar'
                onClick={handleNewDishe}
                />
                  
            </Content>            
        </Container>
        <Footer />
    </>
  )
}
