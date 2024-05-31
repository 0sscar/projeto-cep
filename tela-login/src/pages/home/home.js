import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, Button } from 'react-native';
import Modalogin from '../../components/modal_login/modal_login';

const Home = (props) => {
  const googleApiKey = "AIzaSyD8OZEHbRuZSeWDRE4X4Ls5dHCCv46C-nk"; // Substitua pela sua chave de API do Google

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <style>
        body {
          background-color: #3A8592;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90vh;
          text-align: center;
          flex-direction: column;
          padding-top: 50px;
        }
        .title-style {
          font-size: 70px;
          color: yellow;
          font-family: sans-serif;
          font-weight: bold;
          text-align: center;
        }
        .search-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          height: 10vh;
        }
        .input-style {
          flex-grow: 1;
          padding: 10px 40px 10px 20px;
          border-radius: 20px;
          border: 1px solid #fff;
          width: 100%;
          box-sizing: border-box;
          font-size: 16px;
        }
        .botao-search {
          position: absolute;
          right: -1.5px;
          background-color: yellow;
          border: none;
          padding: 7px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
          box-sizing: border-box;
        }
        .botao-search:hover {
          background-color: #FFD700;
        }
        .Main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #FFF;
          width: 500px;
          border-radius: 8px;
          margin: 20px auto;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-weight: bold;
          font-size: 100%;
        }
        .info {
          background-color: transparent;
          color: yellow;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .info:hover {
          background-color: #FFD700;
        }
        @media (max-width: 620px) {
          .Main {
            width: 90%;
          }
          .title-style {
            font-size: 50px;
          }
          .input-style {
            width: 100%;
          }
        }
      </style>
      <script>
        function initMap() {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -23.5505, lng: -46.6333 },
            zoom: 15
          });
          const marker = new google.maps.Marker({
            position: { lat: -23.5505, lng: -46.6333 },
            map: map
          });

          document.getElementById('cepInput').addEventListener('blur', function() {
            const cep = this.value.replace(/\\D/g, '');
            if (cep.length !== 8) {
              console.log('CEP inválido.');
              document.getElementById('addressInfo').style.display = 'none';
              return;
            }

            fetch(\`https://viacep.com.br/ws/\${cep}/json/\`)
              .then(res => res.json())
              .then(data => {
                if (data.erro) {
                  console.log('CEP não encontrado.');
                  document.getElementById('addressInfo').style.display = 'none';
                  return;
                }
                document.getElementById('address').value = data.logradouro;
                document.getElementById('neighborhood').value = data.bairro;
                document.getElementById('city').value = data.localidade;
                document.getElementById('uf').value = data.uf;
                document.getElementById('addressInfo').style.display = 'block';

                fetch(\`https://maps.googleapis.com/maps/api/geocode/json?address=\${cep},BR&key=${googleApiKey}\`)
                  .then(res => res.json())
                  .then(data => {
                    if (data.status === 'OK') {
                      const location = data.results[0].geometry.location;
                      map.setCenter(location);
                      marker.setPosition(location);
                    }
                  });
              })
              .catch(err => console.error('Erro na requisição:', err));
          });
        }

        window.addEventListener('load', initMap);
      </script>
    </head>
    <body>
      <div class="container">
        <div class="title-style">Busca CEP</div>
        <div class="search-container">
          <input type="text" id="cepInput" class="input-style" placeholder="Insira o CEP..."/>
          <button class="botao-search">
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>
        <div id="addressInfo" class="Main" style="display:none;">
          <div id="map" style="width: 100%; height: 400px;"></div>
          <div style="margin-top: 20px; width: 100%; display: flex; justify-content: space-between;">
            <div>
              <label>Rua: <input type="text" id="address" style="border:none; background:transparent;"/></label><br/>
              <label>Bairro: <input type="text" id="neighborhood" style="border:none; background:transparent;"/></label>
            </div>
            <div>
              <label>Cidade: <input type="text" id="city" style="border:none; background:transparent;"/></label><br/>
              <label>Estado: <input type="text" id="uf" style="border:none; background:transparent;"/></label>
            </div>
          </div>
        </div>
      </div>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap"></script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={{ flex: 1 }}
        />
      </View>
      <View>
        <Modalogin/>   
      </View>
        <Button title='contatos' onPress={()=> props.navigation.navigate('contatos')}/>
      </View>
  );
};
//*to chamando o modal dentro desse view mas da erro na hora de executar "Native crypto module could not be used to get secure random number."

const styles = StyleSheet.create({
  // Adicione seus estilos aqui, se necessário
});

export default Home;