
import {
  IonApp,
  IonImg,
  setupIonicReact
} from '@ionic/react';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { IonProgressBar } from '@ionic/react';
import { IonCard, IonContent, IonButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import '@ionic/react/css/core.css';


import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAPICall = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://randomfox.ca/floof');
      console.log(response.data);
      setImageUrl(response.data.image); 
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Gerador de Raposas</h1>
      {isLoading ? (
        <p>Carregando dados...</p>
      ) : (
        <div>
          <IonButton onClick={handleAPICall}>Chamar API</IonButton>
          {imageUrl && <IonImg src={imageUrl} alt="Imagem da Raposa" />}
        </div>
      )}
    </div>
    
  );
};

export default App;

