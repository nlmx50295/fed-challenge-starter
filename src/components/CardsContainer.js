import React, {useReducer, useEffect} from 'react';
import axios from 'axios';
import styles from './CardsContainer.module.css';
import Card from './Card';

export const CardsContext = React.createContext();

const initialState = {
  loading: true,
  error: '',
  cards: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        cards: action.payload.cards,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        cards: {},
        error: action.payload
      }
    case 'SET_ACTIVE_CARD_ID':
      return {
        ...state,
        activeCardId: action.payload
      }
    default:
      return state
  }
}

export default function CardsContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('/cards.json')
      .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR', payload: error.message});
      })
  }, []);
  const { loading, error, cards, activeCardId } = state;

  return (
    <div className={styles.cardsContainer}>
      { loading 
        ? 'Loading...' 
        : error
          ? error
          : cards.map(card => (
            <Card key={card.id} {...card} activeCardId={activeCardId} dispatchActiveCardId={dispatch} />
          ))
      }
    </div>
  );
}