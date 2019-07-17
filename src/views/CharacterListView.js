import React from "react";
import { connect } from "react-redux";
import {pullChar} from "../actions"
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.pullChar()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h1>Fueling the X-Wings...Please Wait.</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

 
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state =>{
  return{
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    {pullChar}
  }
)(CharacterListView);
