import React, { useState, Component } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar,
  StyleSheet, Text, useColorScheme, View, TouchableOpacity, Dimensions, Button,
  ToastAndroid,
} from 'react-native';
import tictactoe from './src/tictactoe';


export default class App extends Component {


  constructor(props) {
    super(props);
    tictactoe.start();
    //tictactoe.restart();
    this.state = {
      board: tictactoe.board,
      gameOver: tictactoe.gameover,
      //NumberHolder : 1
    }
    //this.state={
    // This is our Default number value
    //}
  }
  /*
    GenerateRandomNumber = () => {
      var RandomNumber = Math.floor(Math.random() * 9) + 1;
      this.setState({
        NumberHolder: RandomNumber
      })
    }
    */
  makeplay(index) {
    tictactoe.make_play(index)
    this.setState({
      board: tictactoe.board,
      gameOver: tictactoe.gameover
    })
  }

  isGameOver() {
    if (this.state.gameOver) {
      return (<Text style={styles.restartText}>Game Over</Text>
      )
    }

  }


  render() {
    {/*}
    const showToast = () => {
      ToastAndroid.show("Novo Jogo !", ToastAndroid.SHORT);
    };
  */}

    return (
      <View style={styles.Titulo}>

        {/*<Text style={styles.tituloText}>Jogo da velha</Text>
        <Text style={styles.tituloText}>Marília</Text>
        */}
        <View style={styles.Container}>

          {this.state.board.map((value, index) => (
            <View>
              <TouchableOpacity key={index} style={styles.piece}
                onPress={() => { this.makeplay(index) }}>
                <Text style={styles.pieceText}>
                  {value}
                </Text>
              </TouchableOpacity>
            </View>

          ))}
          {/*
        <Button title="Generate" onPress={this.GenerateRandomNumber} />
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>
        */}
          {/*<Button title="Reiniciar" onPress={() =>tictactoe.restart()} />*/}
        </View>
        {
          this.isGameOver()
        }
        {/*<Button title="Toggle Toast" onPress={() => showToast()} />*/}
        {/*}
        if (this.state.gameOver) {
          <Text>Acabou324r</Text>

        }
      */}
        <Text></Text>

        <TouchableOpacity style={styles.restart}
          onPress={() => { tictactoe.restart(), (ToastAndroid.show("Novo Jogo !", ToastAndroid.SHORT)) }}>
          <Text style={styles.restartText}>
            Reiniciar
          </Text>

        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  Titulo: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    backgroundColor: "#ffccff",
  },
  tituloText: {
    fontSize: 20,
  },
  restart: {
    flexDirection: 'column',
    //flex: 1,
    //flexWrap: "wrap",
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 10,
    backgroundColor: "#888888",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ff2244",
  },
  restartText: {
    color: "#000000",
    fontSize: 20,
  },
  Container: {
    //flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    backgroundColor: "#ff2299",
    //borderWidth: 20,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#ff2299",


  },
  piece: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: "#aaaaaa",
    alignItems: "center",
    justifyContent: "center",
    

    borderWidth: 1,
    borderColor: "#ff2244",

  },
  pieceText: {
    fontSize: 60,
    color: "#000000",
  },

});


