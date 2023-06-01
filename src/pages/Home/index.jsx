import React, { useEffect, useState } from 'react'

import { api } from '../../services/api';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import {
    Container,
} from './styles';

export const Home = () => {
    const [categories, setCategory] = useState([])
    
    const [dishes, setDishes] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect( () => {
        async function fetchCategories(){
            const response = await api.get(`/categories`);
            const categories = response.data;
            setCategory(categories)
            //console.log(categories)
        }
        fetchCategories();
    }, []);

    useEffect( () => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?name=${search}`);
            const dishes = response.data.dishes;
            setDishes(dishes);
        }
        fetchDishes();
    }, [search]);
  
  return (
      <>
        <Header search={setSearch}/>
        <main>
            <Container>
                <Intro />
                
                {
                    search && search ?
                    
                        dishes && dishes.length > 0 ?
                        <Section title="Resultado da busca">
                            <Swiper
                                breakpoints={{
                                    "@0.00": {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    "@0.75": {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    "@1.00": {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    "@1.20": {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                            {
                                dishes.map((item, index) => (
                                    <SwiperSlide
                                        key={String(index)}
                                        style={{ height: 'auto', display: 'flex'}}
                                    >
                                        <Card 
                                            data={item}
                                        />
                                    </SwiperSlide>
                                    ))
                            }
                        </Swiper>
                        </Section>
                        :
                        <Section title="Resultado da busca">
                            <p>Nenhum resultado encontrado!</p>
                        </Section>

                    
                    :
                    
                    categories && categories.filter( category => category.category !== null)
                    .map( category => 
                    <Section 
                    key={category.id} 
                    title={category.category}>
                        <Swiper
                             grabCursor={true}
                             loop={true}
                             breakpoints={{
                                 "@0.00": {
                                     slidesPerView: 1,
                                     spaceBetween: 10,
                                 },
                                 "@0.75": {
                                     slidesPerView: 2,
                                     spaceBetween: 20,
                                 },
                                 "@1.00": {
                                     slidesPerView: 3,
                                     spaceBetween: 40,
                                 },
                                 "@1.20": {
                                     slidesPerView: 4,
                                     spaceBetween: 40,
                                 },
                             }}
                             navigation={true}
                             modules={[Navigation]}
                             className="mySwiper"
                        >
                            {
                                dishes.filter(dishe => dishe.category_id === category.id)
                                .map((item, index) => (
                                    <SwiperSlide
                                        key={String(index)}
                                        style={{ height: 'auto', display: 'flex'}}
                                    >
                                        <Card 
                                            data={item}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Section>)
                    
                }

            </Container>
        </main>
        <Footer />
      </>
  )
}
