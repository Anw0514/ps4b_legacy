import React, { Component, Fragment } from "react";
import { Image, Grid, List } from "semantic-ui-react";

class ImgDiv extends Component {
    // Dynamic component for white divs that have an image on one side.
    // image (required): the image for the div. must be required in the parent component
    //      i.e. <ImgDiv image={require('path/to/image')}
    // right: bool for whether or not the image appears on the right of the text instead of the left.
    //      can be left out or set to false if the image appears to the left
    // lsit: an array of list items if the content for the text is an unordered list. If the content is not a list, 
    //      this prop should be left out
    // paragraphs: just like the list prop, but with paragraphs instead
    // title (required): the title of the text section of the imgdiv




  content(list, paragraphs) {
    if (list) {
      return (
        <List bulleted>
          {list.map(item => {
            return <List.Item className='imgdiv-item'>{item}</List.Item>
          })}
        </List>
      )
    } else {
      return paragraphs.map(pgrph => {
        return <p>{pgrph}</p>;
      });
    }
  }

  render() {
    const { image, right, list, title, paragraphs } = this.props
    return (
      <div className="imgdiv regular-section bg-white rounded-corners">
        <Grid stackable>
          {right ? (
            <Fragment>
              <Grid.Column width={10}>
                <div className="imgdiv-text">
                  <h2>{title}</h2>
                  {this.content(list, paragraphs)}
                </div>
              </Grid.Column>
              <Grid.Column style={{minHeight: '300px'}} className="noPadding" width={6}>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="imgdiv-img"
                ></div>
              </Grid.Column>
            </Fragment>
          ) : (
            <Fragment>
              <Grid.Column style={{minHeight: '300px'}} className="noPadding" width={6}>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="imgdiv-img"
                ></div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div className="imgdiv-text">
                  <h2>{title}</h2>
                  {this.content(list, paragraphs)}
                </div>
              </Grid.Column>
            </Fragment>
          )}
        </Grid>
      </div>
    );
  }
}

export default ImgDiv;
