import React from 'react';
import MenuItem from './common/MenuItem';
import './css/homepage.scss';

export default class Directory extends React.Component {
  constructor() {
    super();
    //En el estado inicial de la pagina se guardan la informacion de las categoria que se usaran, esta informacion se pasa a otro componente
    this.state = {
      sections: [
        {
          title: 'Retratos',
          imageUrl: 'https://i.ibb.co/CBnQPQF/Retrato-Chavo.png',
          id: 1,
          linkUrl: '/cat1'
        },
        {
          title: 'Animales',
          imageUrl: 'https://i.ibb.co/cbJbD57/1500395606-864116-1500447827-noticia-normal.jpg',
          id: 2,
          linkUrl: '/cat2'
        },
        {
          title: 'Naturaleza',
          imageUrl: 'https://i.ibb.co/XYN4ZWd/tucan-0.jpg',
          id: 3,
          linkUrl: '/cat3'
        },
        {
          title: 'Anatomina',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '/cat4'
        },
        {
          title: 'Cultura Pop',
          imageUrl: 'https://i.ibb.co/3zKL9px/popart.jpg',
          size: 'large',
          id: 5,
          linkUrl: '/cat5'
        },
        {
          title: 'Caricaturas',
          imageUrl: 'https://i.ibb.co/nfzL1R4/Cartoons.png',
          size: 'large',
          id: 6,
          linkUrl: 'cat6'
        },
        {
          title: 'Comics',
          imageUrl: 'https://i.ibb.co/JsCRDFf/Comics.png',
          size: 'large',
          id: 7,
          linkUrl: 'cat7'
        }
      ]
    };
  }

  render() {
    return (
    <div className='homepage'>
      <div className='directory-menu'>
        {/* Aqui se mapean los componentes de la pagina inicial  */}
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem 
          key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
    );
  }
}