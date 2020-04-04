import React from 'react';
import './RandomQuoteMachine.css';
import adage from './adage';
import ScrollAnimation from 'react-animate-on-scroll';

const getAdage = adage.adages;
let maxAdage = getAdage.length;
let numberAdage = 0;
let locTweet = undefined;

function getRandomNum() {
    return Math.floor(Math.random() * maxAdage);
}

class QuoteBox extends React.Component {
    constructor() {
        super();
        this.state = {
            Color: undefined
        }
    }

    ChangeColorFunction = () => {
        numberAdage = getRandomNum();
        locTweet = "https://twitter.com/intent/tweet?hashtags=" + getAdage[numberAdage];
        
        let ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';

        this.setState({
            Color: ColorCode
        })
        document.body.style.backgroundColor = this.state.Color;
        document.getElementById("text").style.color = this.state.Color;
        document.getElementById("author").style.color = this.state.Color;
        document.getElementById("tweet-quote").style.color = this.state.Color;
        document.getElementById("new-quote").style.backgroundColor = this.state.Color;
        document.getElementById("tweet-quote").setAttribute("href",locTweet);
    }

    render() {
        return (
            <div>
                <div><ScrollAnimation animateIn='fadeIn'>
                    <div id="text">{getAdage[numberAdage][0]}</div>
                    <div id="author">- {getAdage[numberAdage][1]}</div>
                </ScrollAnimation>
                </div>

                <div className="buttons">
                    <a id="tweet-quote" target="_blank" without rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <button id="new-quote" onClick={this.ChangeColorFunction}>Next</button>
                </div>
            </div>
        )
    }
}

class RandomQuoteMachine extends React.Component {
    render() {
        return (
            <div>
                <div id="quote-box"><QuoteBox />
                    {/* <div className="signature ">
                        <p>by rafvi</p>
                        <p className="source">Źródło: https://pl.wiktionary.org/wiki/Kategoria:Polskie_przys%C5%82owia</p>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default RandomQuoteMachine;