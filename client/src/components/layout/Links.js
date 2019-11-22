import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const styles = {
  iconRow: {
    display: 'flex',
    alignContent: 'center',
    height: '100px',
    paddingTop: '30px'
  }
};
export const Links = () => {
  return (
    <Grid.Row style={styles.iconRow} stretchd justified>
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
    </Grid.Row>
  );
};

export default Links;
