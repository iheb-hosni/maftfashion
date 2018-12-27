import React from 'react';
import Addarticle from './addarticle'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class Editor extends React.Component {
    setRef = jodit => this.jodit = jodit
    render() {
        return (
            <JoditEditor
                editorRef={this.setRef}
                config={{
                    readonly: false // all options from https://xdsoft.net/jodit/doc/
                }}
                {...this.props}
            />
        )
    }
}
export default Editor