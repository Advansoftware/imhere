import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home(){
  const participants = ['alo', 'galinha', 'gato', 'galo', 'vaca', 'boi', 'arroz', 'feijao', 'batata', 'milhar']
  function handleParticipantAdd(){
    if(participants.includes("galinha")){
     return Alert.alert("Participante existe","Ja existe esse participante")
    }
  }
  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Remover o praticipante ${name}?`, [
      {
        text: "Sim",
        onPress: ()=> Alert.alert("Deletado!")
      },{
        text: "Não",
        style: "cancel"
      }
    ])
    console.log('clicou para remover')
  }
 return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity  
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text  style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
        <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Lista vazia
          </Text>
        )}
        />
    </View>
 ) 
}