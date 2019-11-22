import React, { Component } from 'react';
import { Segment, Header, Grid, Image, Icon } from 'semantic-ui-react';
import Links from './Links';
import HomePhoto from '../../img/HomePhoto.png';

const styles = {
  buttonPadding: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 12px',
    cursor: 'pointer'
  },
  buttonSize: {
    padding: '14px 80px'
  },
  centeredButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonGroup: {
    border: '1px solid green'
  },
  gridRowHeight: {
    height: '350px'
  },
  homePhotoColumn: {
    height: '300px'
  },
  segmentText: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  iconStyle: {
    display: 'flex',
    alignContent: 'center',
    paddingLeft: '40px'
  }
};

const src = `${HomePhoto}`;

export class Home extends Component {
  render() {
    return (
      <Grid verticalAlign='middle' centered>
        <Links />
        <Grid.Row style={styles.gridRowHeight} columns={3}>
          <Grid.Column mobile={16} tablet={8} computer={8} centered>
            <Image src={src} size='huge' fluid />
          </Grid.Column>
          <Grid.Column
            style={{ paddingTop: '28px' }}
            mobile={16}
            tablet={8}
            computer={4}
            centered
          >
            <div style={styles.iconStyle}>
              <a href='https://www.instagram.com/p/B3WQx1UDaKs/'>
                <Icon name='instagram' size='huge'></Icon>
              </a>
              <a href='https://open.spotify.com/artist/7wD0ytHioqxplArYggJ2kt?si=t_n5UCPbTA6qt6-UF7s8Cw'>
                <Icon name='spotify' size='huge'></Icon>
              </a>
              <Icon name='soundcloud' size='huge'></Icon>
              <a href='https://m.facebook.com/music.umar/'>
                <Icon name='facebook' size='huge'></Icon>
              </a>
            </div>
            <Header as='h1' textAlign='center'>
              Umar Mausoof
            </Header>
            <Segment
              style={styles.segmentText}
              textAlign='center'
              basic
              vertical
            >
              Musician | Percussionist
            </Segment>
            <Segment
              style={styles.segmentText}
              textAlign='center'
              basic
              vertical
            >
              Producer | Sound Engineer
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
