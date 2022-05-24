import React from "react";
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Linking,
    Pressable
    } 
    from "react-native";

const colorGithub = "#0D1117";
const colorFontGitHub = "#C9D1D9";
const colorFontDarkGitHub = "#6E7680";

const imageProfileGitHub = "https://avatars.githubusercontent.com/u/34349005?v=4";

const urlToMyGitHub = "https://github.com/alexdeividy";

const App = ()=> {

    const handlePressGoToGitHub = async () => {
        console.log("Verificando Link");
     const res = await Linking.canOpenURL(urlToMyGitHub)
     if(res){
         console.log("Link Aprovado");
         console.log("Abrindo Link....");
        await Linking.openURL(urlToMyGitHub)
     }
    };

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor = {colorGithub} barStyle= "light-content" />
     <View style={style.content}>
        <Image
        accessibilityLabel="Alex no espelho"
        style={style.avatar} 
        source={{uri: imageProfileGitHub}}
        />
        <Text
         accessibilityLabel="Nome: Alex Santana"
         style = {[style.defaultText, style.name]}>
         Alex Santana
         </Text>
        <Text
         accessibilityLabel="nickname: alex deividy"
         style = {[style.defaultText, style.nickname]}>
         alexdeividy
         </Text>
        <Text
         accessibilityLabel="Descricao: Mobile Developer | Estudante de Análise e Desenvolvimento de Sistemas"
         style = {[style.defaultText, style.description]}>
         Mobile Developer | Estudante de Análise e Desenvolvimento de Sistemas
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style = {style.button}>
            <Text style = {[style.defaultText, style.textButton]}>
                Open in GitHub
            </Text>
          </View>
        </Pressable>
     </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1, // expandir cor para tela inteira
        justifyContent: "center",
    },
    content:{
        alignItems: "center",
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name:{
        marginTop: 20,
        fontWeight:"bold",
        fontSize: 26,
    },
    nickname:{
        color: colorFontDarkGitHub,
        fontSize: 18,
    },
    description:{
        fontWeight:"bold",
        fontSize: 14,
    },
    button:{
        backgroundColor: colorFontDarkGitHub,
        borderRadius: 10.,
        padding: 20,
        marginTop: 20,
    },
    textButton:{
        fontWeight:"bold",
        fontSize: 16,
    },
});