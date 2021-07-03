/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CardRecommendeds(props) {
  const [titleLocal, setTitleLocal] = useState('');
  const [imageLocal, setImageLocal] = useState('');
  const [idLocal, setIdLocal] = useState(0);
  useEffect(() => {
    const { title, image, id } = props;
    setTitleLocal(title);
    setImageLocal(image);
    setIdLocal(id);
  }, []);
  return (

    <Container>
      <img src={ imageLocal } alt="Imagem da comida" />
      <h3
        data-testid={ `${idLocal}-recomendation-title` }
      >
        { titleLocal }
      </h3>
    </Container>

  );
}

CardRecommendeds.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const Container = styled.div`
  width: 160px;
  height: 200px;
  overflow: hidden;
  display: flex;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 60%;
    /* object-fit: fill; */
  }

  h3 {
    width: 80%;
    font-size: 18px;
    color: black;
    flex: 1;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
