import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
    <Image style={{ resizeMode: 'stretch', height: 200 }} source={{uri: props.carro.capa}} />
    <Text>  {props.carro.titulo}  </Text>
    <Text>  {props.carro.artista}  </Text>
  </View>
  )
}

export default function App() {
  const carros = [
    {
      capa: "https://wahooart.com/Art.nsf/O/8XXQ3T/$File/Berthe-Morisot-The-Bath.JPG",
      titulo: 'O Banho',
      artista: 'Berthe Morisot'
    },
    {
      capa: "https://iiif.micr.io/TZCqF/full/1280,/0/default.jpg",
      titulo: 'Os Girassois',
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
      capa: "https://autosorfaos.files.wordpress.com/2010/08/gol-bege.jpg",
      titulo: 'gol véio',
      preco: 2
    },
    {
      capa: "https://autosorfaos.files.wordpress.com/2010/08/gol-bege.jpg",
      titulo: 'gol véio',
      preco: 2
    }
  ]
  return (
    <ScrollView style={styles.container} >
      <Text style={{fontSize: 30, fontWeight: 'bold '}}>Galeria de Arte</Text>
      <StatusBar style="auto" />
      <View style={styles.conteudo}>
      {
        carros.map(carro => <Card carro={carro} />)
      }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455e3b',
    paddingTop: 10,
    marginTop: 40,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff7d1',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%'
    
  },
  card: {
    width: '40%',
    height: 240,
    backgroundColor: '#f7e26a',
    margin: 15
  }
});
