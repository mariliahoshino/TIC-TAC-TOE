import React, { useState, Component } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar,
    StyleSheet, Text, useColorScheme, View, TouchableOpacity, Dimensions, Button,
    ToastAndroid, Alert
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useCallback } from "react/cjs/react.production.min";
//https://reactnativecode.com/generate-random-number/
//https://reactnative.dev/docs/toastandroid#center
// TIC TAC TOE
export default {
    //const tic_tac_toe = {

    // ATTRIBUTES
    board: ['', '', '', '', '', '', '', '', ''],
    symbols: {
        options: ['O', 'X'],
        turn_index: 0,
        change() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    //container_element: null,
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    // FUNCTIONS
    /*
    init(container) {
        this.container_element = container;
    },
*/
    make_play(position) {
        if (this.gameover || this.board[position] !== '') return false;

        const currentSymbol = this.symbols.options[this.symbols.turn_index];
        this.board[position] = currentSymbol;
        //this.board[this.NumberHolder] = "O";
        //this.draw();

        const winning_sequences_index = this.check_winning_sequences(currentSymbol);
        if (this.is_game_over()) {
            this.game_is_over();
        }
        if (winning_sequences_index >= 0) {
            this.game_is_over();
            ToastAndroid.show("Você Ganhou :) ", ToastAndroid.SHORT);
            //this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);
        } else {
            //this.symbols.change();
            //this.symbols.turn_index=1;
            //retorno1:
            //position = Math.floor(Math.random())
            while (true) {
                if (this.board[0] != [] && this.board[1] != [] && this.board[2] != [] && this.board[3] != [] &&
                    this.board[4] != [] && this.board[5] != [] && this.board[6] != [] && this.board[7] != []
                    && this.board[8] != []) {
                    console.log('deu velha ');
                    ToastAndroid.show("Deu Velha :/ ", ToastAndroid.SHORT);
                    break;

                }
                this.GenerateRandomNumber();
                console.log('posição máquina ' + this.NumberHolder);
                if (this.board[this.NumberHolder] == '') {
                    //this.board[this.NumberHolder] = currentSymbol;
                    this.board[this.NumberHolder] = "X";
                    //this.symbols.change();
                    //call
                    break;
                }
                else {
                    console.log('precisa voltar casa ocupada ' + this.NumberHolder);
                }
            }

            //const winning_sequences_index = this.check_winning_sequences(currentSymbol);
            const winning_sequences_index = this.check_winning_sequences("X");
            if (this.is_game_over()) {

                this.game_is_over();

            }
            if (winning_sequences_index >= 0) {
                ToastAndroid.show("Você Perdeu :( ", ToastAndroid.SHORT);
                this.game_is_over();
                //this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);
            }

            //this.symbols.turn_index=0;

            /*   Do Until cmdBot(M).Caption = ""
               M = Int(Rnd * 9)
               Loop
               cmdBot(M).Caption = "O"
               */
        }

        return true;
    },
    /*
        stylize_winner_sequence(winner_sequence) {
            winner_sequence.forEach((position) => {
                this
                    .container_element
                    .querySelector(`div:nth-child(${position + 1})`)
                    .classList.add('winner');
            });
        },
        */

    GenerateRandomNumber() {
        var RandomNumber = Math.floor(Math.random() * 8) + 1;
        //this.setState({
        //    NumberHolder: RandomNumber
        this.NumberHolder = RandomNumber
        //})
    },


    check_winning_sequences(symbol) {

        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == symbol &&
                this.board[this.winning_sequences[i][1]] == symbol &&
                this.board[this.winning_sequences[i][2]] == symbol) {
                console.log('winning sequences INDEX:' + i);
                //ToastAndroid.show("Acabou ", ToastAndroid.SHORT);
                return i;
            }
        };
        return -1;
    },

    game_is_over() {
        this.gameover = true;
        console.log('GAME OVER');
    },

    is_game_over() {
        return !this.board.includes('');
    },

    start() {
        this.board.fill('');
        //this.draw();
        this.gameover = false;
    },

    restart() {
        if (this.is_game_over() || this.gameover) {
            this.start();
            console.log('this game has been restarted!')
        } else if (this.createTwoButtonAlert()) {
            //this.start();
            //console.log('this game has been restarted!')
        }
    },


    createTwoButtonAlert() {
        Alert.alert(
            //"Novo Jogo",
            "Deseja começar um novo jogo?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                
                {
                    
                    text: "OK", onPress: () => {
                        
                        

                        
                        console.log("OK Pressed")
                        this.start();
                        console.log('this game has been restarted!')
                        ToastAndroid.show("Novo jogo", ToastAndroid.SHORT);
                    }
                }
            ]
        );
    }

    /*
    draw() {
        this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
    },
    */
};