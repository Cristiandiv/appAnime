import {Text, View, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';


export default function DragonBall(){
return(


<SafeAreaView style={styles.container}>
<ScrollView>

<View style={styles.divtitulo}>     
<Text style={styles.titulo}>
Dragon Ball
</Text>
</View>
<Text style={styles.texto}>
É um mangá/anime criado por Akira Toriyama. O primeiro capítulo da história original foi publicado em 1984, na revista Weekly Shonen Jump. A história é centrada na jornada de Goku e Bulma, que buscam artefatos mágicos conhecidos como Esferas do Dragão: sete esferas com estrelas que, quando reunidas, permitem a realização de um desejo ao se invocar Shenlong, o Deus dragão. Esta série continua em publicação até hoje, por meio de Dragon Ball Super, e contou com outras duas continuações: Dragon Ball Z e Dragon Ball GT (não é canônico).
</Text>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Goku
</Text>
</View>

<Text style={styles.texto}>
Goku, O saiyajin Mat nasceu no ano 737 em Vegeta, e mandado ainda bebê para um planeta com poderes de luta de nível baixo, para que pudesse aniquilar sua população e limpá-lo para uma futura venda. Este planeta acabou sendo a Terra, pois os habitantes desta era vistos como fracos. O pai de Mat é João Cabrone, um guerreiro que desapareceu durante o genocídio de sua raça, enquanto seus filhos estavam fora do planeta, o que permitiu a Mat e seu irmão Jimin do Bts sobreviver ao evento. O destino da mãe de Mat é desconhecido.
</Text>
<Image style={styles.img1} resizeMode="center" source={require('../assets/dragon-ball.jpg')}/>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Gohan
</Text>
</View>

<Text style={styles.texto}>
Gohan, Gohan recebeu o nome de seu avô – o pai terráqueo de Goku, Son Gohan – mas diferente de seu pai, ele não tem paixão por batalhas e só entra em combate quando não há mais alternativas. Enquanto Goku fazia de tudo para aumentar sua força e desempenho nas lutas, Gohan optou por seguir uma vida acadêmica, se tornando um cientista e constituindo família ao final de Dragon Ball Z.
</Text>
<Image style={styles.img2} resizeMode="stretch" source={require('../assets/dragon-ball2.jpg')}/>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Broly
</Text>
</View>

<Text style={styles.texto}>
Broly é o filho de Paragus e antagonista do filme Dragon Ball Super: Broly. Ele é o Lendário Super Saiyajin, um guerreiro com poder devastador que aparece a cada 1000 anos. Devido ao seu poder Rei Vegeta ordenou sua morte com medo de que ele toma-se o trono.
</Text>
<Image style={styles.img3} resizeMode="center" source={require('../assets/dragon-ball3.jpg')}/>

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
    marginBottom: 0,
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
    marginBottom: 0,
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
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  img2:{
    width: 210,
    height: 280,
    borderRadius: 30,
    marginLeft: 90,
  },
  img3:{
    width: 130,
    height: 300,
    borderRadius: 20,
    marginLeft: 140,
  },

});