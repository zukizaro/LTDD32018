
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

const inputButtons = [
	['7','8','9','/'],
	['4','5','6','*'],
	['3','2','1','-'],
	['0','.','=','+']
]

export default class Calculator extends Component{

	constructor(props){
		super(props);

		this.state = {
			currentinput : "",
			previnput: '0',
			operator: null,
		}
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerDisplay}>
					<Text style={styles.textDisplay}>{this.state.currentinput}</Text>
				</View>

				<View style={styles.containerInput}>
					{this._renderButton()}
				</View>
			</View>
			);
	}


	_saveOperator(value){
		this.setState({
			operator:value,
			previnput: this.state.currentinput,
			currentinput: ''
		})
	}

	_saveResult(value){
		let previnput = this.state.previnput;
		let currentinput = this.state.currentinput;
		let operator = this.state.operator;

		let result = eval(previnput + operator + currentinput);
		this.setState({currentinput:result}); 
	}

	_saveNumber(value){
		this.setState({
			currentinput:this.state.currentinput + value
		})
	}

	_onPress(value){
		switch(value){
			case "/":
			case "*":
			case "+":
			case "-":
				this._saveOperator(value);
			break;

			case "=":
				this._saveResult(value);

			break;

			default : 
				this._saveNumber(value);
			break;
		}
	}

	_renderButton(){
		let views = [];
		let countrow = inputButtons.length;
		for(let i=0;i<countrow;i++){
			let input = [];
			let column = inputButtons[i];

			for(let j=0; j<column.length; j++){
				input.push(
					<TouchableHighlight underlayColor={"#00BFA5"} key={'row' + i + ' - ' + 'column'+j} style={styles.inputButton} onPress={this._onPress.bind(this,column[j])}>
						<Text style={styles.textInputButton}>{column[j]}</Text>
					</TouchableHighlight>
					)
			}

			views.push(<View style={styles.inputRow} key={'row' + i}>{input}</View>)
		}

		return views;
	}
}