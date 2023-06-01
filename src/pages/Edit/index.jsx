import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    Content,
    BoxButtons
} from './styles';

export const Edit = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])
    const [categorySelected, setcategorySelected] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("");

    const params = useParams();
    
    const navigate = useNavigate();
        
    const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category_id", categorySelected);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        async function handleEdit(){

            if (!image) {
                return alert("Escolha uma imagem para o prato!");
            }
            
            if (!name) {
                return alert("Informe o prato");
            }
    
            if (ingredients.length < 1) {
                return alert("Adicione pelo menos um ingrediente!")
            }
    
            if (newIngredient) {
                return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
            }
    
            if (!price) {
                return alert("Informe um preço para o prato!");
            }
    
            if (!description) {
                return alert("Informe a descrição do prato!");
            }

            await api
            .put(`/dishes/${params.id}`, formData)
            .then(alert("Prato modificado com sucesso!"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao criar o prato!");
                }
            })
            navigate("/")
        }
        async function handleDeleteDishe() {
            const confirmDelete = confirm("Tem certeza que deseja deletar o prato?")

            if(confirmDelete){
                await api
                .delete(`/dishes/${params.id}`)
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        alert("Erro ao criar o prato!");
                    }
                })
                navigate("/")
            }
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
        }, []);

        useEffect( () => {
            async function fetchDataDishe(){
                const response = await api.get(`/dishes/${params.id}`);
                const dishe = response.data;
                setName(dishe.name);
                setDescription(dishe.description);
                setcategorySelected(dishe.category_id);
                setPrice(dishe.price);
                setIngredients(dishe.ingredients)
            }
            fetchDataDishe();
        }, []);
        

  return (
    <>
        <Header disabled/>
        
        <Container>
            <Content>
                <Link to="/"><MdOutlineArrowBackIosNew />Voltar</Link>
                <div className='new-category'>
                    <h1>Editar prato</h1> 
                </div>
                
                <div>
                    <InputFile 
                    onChange={e => setImage(e.target.files[0])}
                    title='Selecione imagem para alterá-lo'
                    />

                    <Input 
                    id={name}
                    value={name}
                    title="Título"
                    type="text"
                    placeholder="Digite o nome do prato"
                    onChange={ ({target}) => setName(target.value)}
                    />

                    <div>
                        <span>Categoria</span>
                        <select 
                        value={categorySelected} 
                        name='categories' 
                        onChange={ ({target}) => setcategorySelected(target.value) }>
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
                    value={price}
                    title="Preço"
                    type="text"
                    placeholder="R$ 00,00"
                    onChange={ ({target}) => setPrice(target.value)}
                    />
                </div>
                
                <TextArea onChange={ ({target}) => setDescription(target.value)} value={description}/>
                
                <BoxButtons>
                    <Button className='btn-delete'
                    type='button'
                    title='Excluir prato'
                    onClick={handleDeleteDishe}
                    />
                    <Button 
                    type='button'
                    title='Salvar'
                    onClick={handleEdit}
                    />
                </BoxButtons>
                  
            </Content>            
        </Container>
        
        <Footer />
    </>
  )
}
