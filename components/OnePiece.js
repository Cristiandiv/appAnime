import {Text, View, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';

export default function OnePiece(){
return(

<SafeAreaView style={styles.container}>
<ScrollView>

<View style={styles.divtitulo}>     
<Text style={styles.titulo}>
One Piece
</Text>
</View>

<Text style={styles.texto}>
One Piece (ワンピース Wan Pīsu?) é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997, com os capítulos compilados e publicados em 106 volumes tankōbon pela editora Shueisha até junho de 2023. One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha após ter comido um fruto do diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas. One Piece atingiu a marca de mil capítulos publicados na Weekly Shonen Jump em janeiro de 2021, se tornando um dos raros mangás a ultrapassar tal marca
</Text>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Luffy
</Text>
</View>

<Text style={styles.texto}>
Luffy, Monkey D. Luffy, também conhecido como "Luffy do Chapéu de Palha" e comumente como "Chapéu de Palha", é o fundador e capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele deseja encontrar o tesouro lendário deixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas,o que ajudaria a facilitar um sonho desconhecido dele que ele contou apenas para Shanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.
</Text>
<Image style={styles.img1} resizeMode="stretch" source={require('../assets/luffy.jpg')}/>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Zoro
</Text>
</View>

<Text style={styles.texto}>
Zoro, ele foi o primeiro membro a juntar-se à tripulação.Sua fama como mestre espadachim e sua grande força, juntamente com as ações de seu capitão, às vezes levaram os outros a acreditar que ele era o verdadeiro capitão da tripulação antes deste obter sua primeira recompensa, enquanto algumas pessoas acreditam que ele seja o imediato.
</Text>
<Image style={styles.img2} resizeMode="stretch" source={require('../assets/zoro.jpg')}/>

<View style={styles.divsubtitulo}> 
<Text style={styles.subtitulo}>
Sanji
</Text>
</View>

<Text style={styles.texto}>
Vinsmoke Sanji é um personagem criado por Eiichiro Oda para o seu mangá e anime One Piece. Ele é introduzido ainda na primeira saga da história como um cozinheiro do restaurante-navio Baratie e depois passa a trabalhar para o capitão Monkey D. Luffy no seu bando dos Piratas do Chapéu de Palha
</Text>
<Image style={styles.img3} resizeMode="stretch" source={require('../assets/sanji.jpg')}/>

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
    width: 230,
    height: 360,
    borderRadius: 10,
    marginLeft: 90,
    marginTop: 10,
    marginBottom: 10,
  },
  img2:{
    width: 210,
    height: 280,
    borderRadius: 30,
    marginLeft: 100,
  },
  img3:{
    width: 210,
    height: 280,
    borderRadius: 30,
    marginLeft: 100,
  },

});