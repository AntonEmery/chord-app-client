import React, { Component } from 'react'

import Util from '../../Util.js'
import ChordTemplate from '../ChordTemplate'
import ToolBar from './ToolBar'
// import Chordsheets from '../../seed-data.js'
import ToggleInput from '../toggle-input'

class ChordSheet extends Component {

  constructor(props) {
    super(props)
    // Set numbers of frets and strings
    this.numOfFrets = 7
    this.numOfStrings = 6
    // Create arrays filled with values equal to the number of frets/strings
    this.numOfFretsAsArray = Util.fillArrayWithNumbers(this.numOfFrets)
    this.numOfStringsAsArray = Util.fillArrayWithNumbers(this.numOfStrings)
    // Set state
    this.state = {
      title: 'Chord Sheet Title',
      chords: [
        { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, name: 'Chord Name' },
      ]
    }
  }

  toggleVisibility = (id, string, fret) => {
    // id is the id of the specific chord that you are working on
    // string is the string of the chords (0 - 5)
    // fret is the fret of the chord (-1 - 5)

    let currentChords = this.state.chords.slice();
    //set value of current chord and string to the fret you are on
    currentChords[id][string] = fret;
    this.setState({
      chords: currentChords
    })
  }


  addChord = () => {
    this.setState(
      (prevState, props) => {
        const blankChord = { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, name: 'Chord Name' };
        let newChordState = prevState.chords.slice();
        newChordState.push(blankChord);
        return { chords: newChordState }
      }
    )
  }

  updateChordName = (name, id) => {
    this.setState(
      (prevState, props) => {
        let newChordState = prevState.chords.slice();
        newChordState[id].name = name;
        return { chords: newChordState }
      }
    )
  }

  updateSheetTitle = (name) => {
    this.setState({ title: name })
  }

  deleteChord = (id) => {
    this.setState(
      (prevState, props) => {
        let newChordState = this.state.chords.slice();
        newChordState.splice(id, 1);
        return { chords: newChordState }
      }
    )
  }

  render() {
    return (
      <div className="chord-sheet__wrapper">
        <div className="chord-sheet__app-title">
          <h2>Chord App</h2>
          <p>I got the idea for this app when I wanted to send a simple chord sheet to an online guitar student. There did not seem a quick way to do it that was not part of a larger application.</p>
          <p>This is just the basic front end app, there is a back end portion that lets users create accounts and save chord sheets, it just needs a bit more work. For the front end I still need a way to notate barre chords, drag the chords and change the order, and indicate frets that are above the fifth fret.</p>
          <a href="https://github.com/AntonEmery/chord-app-client" target="_blank" rel="noopener noreferrer">Github Repo</a>
        </div>

         <ToolBar addChord={this.addChord} />
        <div className="chord-sheet__container">
          <div className="chord-sheet__title-container">
            <ToggleInput
              setName={this.updateSheetTitle}
              className="chord-sheet__title"
              name={this.state.title}
              inputName='chord-sheet__title'
              id={this.props.id}
              />
          </div>
          <div className="chords__container">
            {this.state.chords.map((chord, index) => {
              return (
                <ChordTemplate
                updateChordName={this.updateChordName}
                key={index}
                id={index}
                state={chord}
                toggleVisibility={this.toggleVisibility}
                deleteChord={this.deleteChord}
                />
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default ChordSheet
