import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  const carros = [
    {
      capa: "https://wahooart.com/Art.nsf/O/8XXQ3T/$File/Berthe-Morisot-The-Bath.JPG",
      titulo: 'O Banho',
      artista: 'Berthe Morisot'
    },
    {
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/1200px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG",
      titulo: 'Café Terraço',
      artista: 'Vincent Van Gogh'
    },
    {
      capa: "https://images.barrons.com/im-561036?width=548&height=755",
      titulo: 'Nenúfares',
      artista: 'Claude Monet'
    },
    {
      capa: "http://totallyhistory.com/wp-content/uploads/2012/09/Michelangelo_Caravaggio.jpg",
      titulo: 'Narciso',
      artista: 'Caravaggio'
    },
    {
      capa: "https://wahooart.com/Art.nsf/O/8EWDLJ/$File/Camille-Pissarro-The-Garden-at-Pontoise.jpg",
      titulo: 'O Jardim em Pontoise',
      artista: 'Camille Pissarro'
    },
    {
      capa: "https://santhatela.com.br/wp-content/uploads/2019/10/renoir-no-balanco-d.jpg",
      titulo: 'No Balanço',
      artista: 'Pierre-Auguste Renoir'
    }
  ]
  return (
    <View style={styles.container}>
      
    <Text style={{fontSize: 30, fontWeight: 'bold ', color: 'white'}}>Galeria de Arte</Text>
    <ScrollView  >
      <View style={styles.conteudo}>
      {
        carros.map(carro => <Card carro={carro} />)
      }
      </View>
    </ScrollView>
      <StatusBar style="auto" />
      </View>
  );
}

function Card(props) {
  return (
    <View style={styles.card}>
    <Image style={{ resizeMode: 'stretch', height: 200 }} source={{uri: props.carro.capa}} />
    <Text style={{color: 'white', padding: 2}}>  {props.carro.titulo}  </Text>
    <Text style={{color: 'white', padding: 2}}>  {props.carro.artista}  </Text>
    <Counter />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#315766',
    paddingTop: 40,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#e9ebe6',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
    
  },
  card: {
    width: '40%',
    height: 290,
    backgroundColor: '#51859c',
    margin: 18,
    padding: 5,
  }
});
