import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class AlternatingMedia extends Component {

    imageFirst(image, { title, paragraphs }) {
        return (
            <Grid.Row>
                <Grid.Column stretched verticalAlign='middle' >
                    <Image src={image} size='medium' rounded centered />
                </Grid.Column>
                <Grid.Column stretched verticalAlign='middle' >
                    <h5>{title}</h5>
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
                <Grid.Column verticalAlign='middle'>
                    <h5>{title}</h5>
                    {paragraphs.map(pg => {
                        return <p>{pg}</p>
                    })}
                </Grid.Column>
                <Grid.Column stretched verticalAlign='middle'>
                    <Image src={image} size='medium' rounded centered />
                </Grid.Column>
            </Grid.Row>
        )
    }

    createRows(images, content, left, mobile){
        let rows = []
        let inverted = left
        for(let i = 0; i < images.length; i++) {
            if(inverted && !mobile){
                rows.push(this.textFirst(images[i], content[i]))
            } else {
                rows.push(this.imageFirst(images[i], content[i]))
            }
            rows.push(<div style={{height: "3rem"}} />)
            inverted = !inverted
        }
        return rows
    }

    render() {
        const { images, content, left, mobile } = this.props
        return (
          <Grid className='text-left top-pad-3' stackable columns={2}>
            {this.createRows(images, content, left, mobile)}
          </Grid>
        )
    }
}

export default AlternatingMedia