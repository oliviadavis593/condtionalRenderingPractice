import React, { Component } from "react";

class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null
  };

  handleActiveSection = sectionIndex => {
    this.setState({
      activeSectionIndex: sectionIndex
    });
  };

  renderItem(sections, idx, activeSectionIndex) {
    return (
      <li className="Accordion_item" key={idx}>
        <button type="button" onClick={() => this.handleActiveSection(idx)}>
          {sections.title}
        </button>
        {activeSectionIndex === idx && <p>{sections.content}</p>}
      </li>
    );
  }

  render() {
    const { activeSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <ul className="Accordion">
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    );
  }
}

export default Accordion;

/*===== Step (#2) ===== */
//Accordion component renders a <ul> (Lines: 33 & 37 )

/*===== Step (#3) ==== */
//Created a method to go inside the renders ul (Line: 18- 27)
// Each sections's li should be a button containing the sections title (Lines:)
// sections, idx & activeSectionIndex are arguments (Line: 22 )

/*===== Step (#4) ==== */
//When a button is clicked a p should be rendered below the button that was clicked (inside the li) - that contains sections content (Lines: 24)

/*===== Step (#5) ==== */
//When a button is clicked - only that section should open & other sections should be closed
// We'll use conditional rendering (when a p is displayed than that is the current active section)
//Implemented state - added activeSectionIndex to renderItems as an argument - added it with <p> element (Lines: 8-10, 18, & 24 )
//Note: Idx is equal to activeSectionIndex because that is the current index it'll be on

/*===== Step (#6) ==== */
//Making the buttons work:
// Adding an event handler to activate the desired current section to display upon button click (Lines: 12-16 )
// Adding the onClick method to the button inside ul (Line: 21 )

/*===== Step (#7) ==== */
//Implementing everything inside the render: (Lines: 34-36 )
//Using activeSectionIndex in place of state & sections in place of props
//We're going to map through the sections array with arguments of section & idx
//We're going to put renderItem in between that - with the current arguments it has
