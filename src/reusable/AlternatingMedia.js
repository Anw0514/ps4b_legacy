import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import StyledList from './StyledList'

class AlternatingMedia extends Component {
  imageFirst(image, content) {
    return (
      <Grid.Row reversed="mobile">
        {this.image(image)}
        {this.content(content)}
      </Grid.Row>
    );
  }

  textFirst(image, content) {
    return (
      <Grid.Row reversed="mobile">
        {this.content(content)}
        {this.image(image)}
      </Grid.Row>
    );
  }

  content({ title, paragraphs, list }) {
    return (
      <Grid.Column verticalAlign="middle">
        <h5>{title}</h5>
        {paragraphs
          ? paragraphs.map(pg => {
              return <p>{pg}</p>;
            })
          : null}
        {list ? <StyledList items={list} /> : null}
      </Grid.Column>
    );
  }

  image(image) {
      const size = this.props.large ? "large" : "medium"
      return (
        <Grid.Column stretched verticalAlign="middle">
          <Image src={image} size={size} rounded centered />
        </Grid.Column>
      );
  }

  createRows(images, content, left) {
    const mobile = window.innerWidth < 760;
    let rows = [];
    let inverted = left;
    for (let i = 0; i < images.length; i++) {
      if (inverted && !mobile) {
        rows.push(this.textFirst(images[i], content[i]));
      } else {
        rows.push(this.imageFirst(images[i], content[i]));
      }
      rows.push(<div style={{ height: "3rem" }} />);
      inverted = !inverted;
    }
    return rows;
  }

  render() {
    const { images, content, left } = this.props;
    return (
      <Grid className="text-left top-pad-3" stackable columns={2}>
        {this.createRows(images, content, left)}
      </Grid>
    );
  }
}

export default AlternatingMedia