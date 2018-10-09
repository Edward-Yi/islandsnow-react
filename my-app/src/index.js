import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, Divider, List, Input } from 'semantic-ui-react';

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <Menu borderless className="topmenu">
            <Container>
              <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
              <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
              <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
              <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
              <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
              <Menu.Item fitted><Icon name="search"/></Menu.Item>
              <Menu.Item fitted><Icon name="user"/></Menu.Item>
              <Dropdown item text="MY CART 0" icon="shop">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Menu>

          <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?1080290453015017671' centered/>

          <div>
            <Menu borderless className="centermenu" widths={5}>
              <Container>
                <Dropdown item text="Men" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Women" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Kids" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Brands" icon="dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>Search</Menu.Item>
              </Container>
            </Menu>
          </div>

          <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?1080290453015017671'/>

          <div className="footer">
            <Grid columns={3}>
              <Grid.Column>
                NAVIGATION
                <Divider />
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                MAIN MENU
                <Divider />
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                CONNECT
                <Divider />
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                </List>

                <Input action={{color: 'black', content: 'Join'}} placeholder='Enter email address'></Input>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    )
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));