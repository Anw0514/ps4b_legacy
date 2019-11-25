import React, { Component, Fragment } from "react";
import { Image, Grid, List } from "semantic-ui-react";

class ImgDiv extends Component {

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
              <Grid.Column style={{minHeight: '400px'}} className="noPadding" width={6}>
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
