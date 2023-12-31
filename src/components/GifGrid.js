import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className='card-grid'>
                {
                    gifs.map(gif => <GifGridItem key={gif.id} {...gif} />)
                }
            </div>
        </>
    );
}
