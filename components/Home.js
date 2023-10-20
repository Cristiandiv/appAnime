import {Text, View, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';

export default function DragonBall(){
return(

<SafeAreaView style={styles.container}>
<ScrollView>

<View style={styles.divtitulo}>     
<Text style={styles.titulo}>
Autores
</Text>
</View>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Akira Toriyama
</Text>
</View>

<Text style={styles.texto}>
Akira iniciou sua carreira em 1978 com a história Wonder Island publicada na Weekly Shonen Jump,[2] depois fez outros mangás: Highlight Island, seguido por Tomato Girl Detective.[3]

Ele conquistou sua fama com Dr. Slump, publicada semanalmente na Shonen Jump de 1980 a 1984, gerando 18 volumes encadernados, que veio a ser o primeiro anime baseado em uma obra de Toriyama.

Ele provavelmente é mais conhecido por ser o autor da famosa série Dragon Ball. Essa série é conhecida como um dos eixos para o que foi conhecido como "a Era Dourada da Jump". Seu sucesso "forçou" Toriyama a trabalhar em Dragon Ball de 1984 a 1995. Durante esse período de onze anos, ele produziu 42 volumes. Cada volume tem uma média de 200 páginas, de maneira que toda trama de Dragon Ball se estende por quase 10,000 páginas. Além disso, o sucesso de Dragon Ball levou a uma série de anime para televisão, filmes de longa-metragem, Video games, e um mega-merchandising.

Seu traço simples e senso de design o levaram a trabalhos projetando personagens para a famosa e popular série de jogos de vídeo game Dragon Quest. Ele também serviu como designer de personagens para o RPG Chrono Trigger para Super Nintendo e o popular jogo de luta Tobal No. 1 para PlayStation, e continua a produzir algumas histórias ocasionais de mangá.

Seus trabalhos depois de Dragon Ball foram histórias curtas (100-200 páginas), incluindo Cowa!, Kajika, Sandland, e alguns one-shots, como a paródia Neko Majin Z.
</Text>
<Image style={styles.img1} resizeMode="stretch" source={require('../assets/Akira-Toriyama.jpg')}/>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Eiichiro Oda
</Text>
</View>


<Text style={styles.texto}>
Eiichiro Oda, conhecido pela sua obra One Piece, nasceu a 1 de janeiro de 1975. Decidiu, com apenas 4 anos, que seria um mangaka (artista de banda desenhada japonesa). Tal decisão baseou-se, principalmente, na tentativa de evitar ter um “trabalho verdadeiro”. Com várias mangas adaptadas em anime pelo mundo fora, todos nós desde pequenos, já tivemos algum contacto com algumas delas: Oliver e Benji, Beyblade, Pokémon, Dragon Ball. Todas estas são adaptações animadas destas histórias escritas e desenhadas em quadradinhos, sendo natural que os autores de gerações futuras absorvam algum tipo de influência das histórias criadas pelos seus ídolos. Para Eiichiro Oda, a sua inspiração foi o mangaka do Dragon Ball, Akira Toriyama. E a sua inspiração para fazer uma história num mundo de piratas, deu-se com a série aninada de televisão Vickie, o Viking.
</Text>
<Image style={styles.img2} resizeMode="stretch" source={require('../assets/godaaa.jpg')}/>

</ScrollView>

</SafeAreaView>

);
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9FB8BE',
    padding: 8,
  },

divtitulo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#FFFF',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },

divsubtitulo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 10,
    backgroundColor: '#FFFF',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
},

titulo:{
    fontSize:20,
    padding: 2,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },

subtitulo:{
    fontSize:20,
    padding: 2,
    borderRadius: 20,
    marginLeft: 50,
    marginRight: 50,
  },

texto:{
    fontSize:15,
    padding: 2,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
},

   img1:{
    width: 330,
    height: 270,
    borderRadius: 10,
    marginLeft: 50,
    marginBottom: 10,
  },
  img2:{
    width: 300,
    height: 270,
    borderRadius: 10,
    marginLeft: 60,
    marginBottom: 10,
  },
});