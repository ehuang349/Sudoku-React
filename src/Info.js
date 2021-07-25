import React, { Component } from 'react';
import logo from './images/logo.png';

class Info extends Component {
    render() {
        return (
            <div className="about">
                <a className='code' target="blank" title="Sudoku" href="https://github.com/ehuang349/Sudoku-React"></a>
                <div className="showabout"></div>
                <div className="aboutme">
                    <img className="aboutlogo" src={logo} alt="logo"/>
                    <hr/>
                    <h3>Sudoku</h3>
                    <p>Sudoku is a game entirely developed by JavaScript(React).</p>
                    <h3>How many puzzles are there?</h3>
                    <p>Sudoku can generate millions of different valid sudokus on each difficulty. You won't have to worry about getting the exact same puzzle.</p>
                    <ol className="playhelp">
                        <li>Click the blank block and then click the number below to fill it in.</li>
                        <li>Click directly on the number below to view the distribution of that selected number.</li>
                        <li><span id="bt1">Click the</span>button to display the possible values of the selected square.<span id="bt2">Click the</span>button to get the definite value of the selected square(three chances in total).</li>
                        <li><span id="bt3">Click the</span>button to delete the input and<span id="bt4">click the</span>button to view the answer to complete the puzzle.</li>
                    </ol>
                    <h3>If you have any questions.</h3>
                    <p>Please email me: ehuang349@gmail.com</p>
                    <hr/>
                    <p>Sudoku is designed and developed by Eric Huang</p>
                </div>
            </div>
        )
    }
}

export default Info