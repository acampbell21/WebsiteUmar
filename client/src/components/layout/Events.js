import React from 'react';
import { Header, Table, Rating, Grid } from 'semantic-ui-react';

export const Events = () => {
  return (
    <Grid padded='vertically' centered>
      <Grid.Row style={{ height: '75px' }}>
        <Header as='h1' textAlign='center'>
          Events
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={12}>
          <Table stackable padded singleLine basic>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Band</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row style={{ padded: '40px' }}>
                <Table.Cell>CJ Soul</Table.Cell>
                <Table.Cell>November 23, 2019 @ 3 PM</Table.Cell>
                <Table.Cell>Leimart Part, Los Angeles</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>CJ Soul</Table.Cell>
                <Table.Cell>November 29, 2019 @ 8 PM</Table.Cell>
                <Table.Cell>Petie's Place, Tarzana</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>CJ Soul</Table.Cell>
                <Table.Cell>December 5, 2019 @ 8 PM</Table.Cell>
                <Table.Cell>Lexington, Los Angeles</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>New Embassy</Table.Cell>
                <Table.Cell>November 22, 2019 @ 9 PM </Table.Cell>
                <Table.Cell>TBD, La Mirada</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>New Embassy</Table.Cell>
                <Table.Cell>November 23, 2019 @ 2 PM </Table.Cell>
                <Table.Cell>Leimart Park, Los Angeles</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ingredient 10</Table.Cell>
                <Table.Cell>November 22 @ 7:30 PM</Table.Cell>
                <Table.Cell>Beatnik Bandito, Santa Ana</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ingredient 10</Table.Cell>
                <Table.Cell>November 23 @ 8 PM</Table.Cell>
                <Table.Cell>Back 2 the Grind Riverside</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sonny Apollo</Table.Cell>
                <Table.Cell>June 25, 26, 27, 2020</Table.Cell>
                <Table.Cell>FUNHOUSE @ Three Clubs Hollywood</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Events;
