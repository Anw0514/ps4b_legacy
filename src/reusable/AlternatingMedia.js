import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class AlternatingMedia extends Component {

    imageFirst(image, { title, paragraphs }) {

    }

    textFirst(image, { title, paragraphs }) {

    }

    createRows(images, content, left){
        let rows = []
        let inverted = left
        for(i = 0; i < images.length; i++) {
            if(inverted){
                rows.push(this.textFirst(images[i], content[i]))
            } else {
                rows.push(this.imageFirst(images[i], content[i]))
            }
            inverted = !inverted
        }
        return rows
    }

    render() {
        const { images, content, left } = this.props
        return (
          <Grid>
            {this.createRows(images, content, left)}
          </Grid>
        )
    }
}

export default AlternatingMedia