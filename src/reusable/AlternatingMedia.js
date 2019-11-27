import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class AlternatingMedia extends Component {

    imageFirst(image, { title, paragraphs }) {
        return (
            <Grid.Row>
                <Grid.Column>
                    <Image src={image} />
                </Grid.Column>
                <Grid.Column>
                    <h3>{title}</h3>
                    {paragraphs.map(pg => {
                        return <p>{pg}</p>
                    })}
                </Grid.Column>
            </Grid.Row>
        )
    }

    textFirst(image, { title, paragraphs }) {
        return (
            <Grid.Row reversed='mobile'>
                <Grid.Column>
                    <h3>{title}</h3>
                    {paragraphs.map(pg => {
                        return <p>{pg}</p>
                    })}
                </Grid.Column>
                <Grid.Column>
                    <Image src={image} />
                </Grid.Column>
            </Grid.Row>
        )
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
          <Grid stackable columns={2}>
            {this.createRows(images, content, left)}
          </Grid>
        )
    }
}

export default AlternatingMedia