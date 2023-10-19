import React from 'react';

export const GifGridItem = ({ id, title, url }) => {


    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}


/**
 * 1. Enzyme
 * 2. Enzyme json
 * 3. debe de mostrar el componente correctamente
 *      Shallow
 *      Wrapper
 *      Wrapper .toMatchSnapshot()
 */