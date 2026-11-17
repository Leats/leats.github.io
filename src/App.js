import React from 'react'

import { Card, Icon, Image, Segment } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import Avatar from './images/Avatar.png'
import ACNHFish from './images/acnhfish.png'
import AO3Statistics from './images/ao3statistics.png'
import ColorScheme from './images/colorschemedesigner.png'
import SpotifyHistory from './images/spotifyhistory.png'
import SpotifyHistoryViewer from './images/spotifyhistoryviewer.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Sidebar">
          <div className="BackgroundImage" />
          <Segment compact raised>
            <Image src={Avatar} centered circular />
            <h3>Leats</h3>
            <a href="https://github.com/Leats" target="_blank" rel="noreferrer">
              <Icon name="github" />
              github
            </a>
            <a
              href="https://twitter.com/LeatsHere"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="twitter square" />
              twitter
            </a>
            <div className="introduction">
              Nice to meet you, I'm Leats! <br /> I'm a software developer with a Master's Degree in Computer Science.<br />
              I also enjoy doing small side projects, which you can find here!<br />
              <br />
              Apart from programming, some of my hobbies are drawing and 3D printing :)

            </div>
          </Segment>
        </div>
        <div className="Works">
          <h2>Open Source Contributions</h2>
          <Card.Group>
            <Card href="https://github.com/indico/indico">
              <Card.Content>
                <Card.Header>indico</Card.Header>
                <Card.Meta>Python, Javascript, React</Card.Meta>
                <Card.Description>
                  A feature-rich event management system, made @ CERN, the place
                  where the Web was born.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Several contributions during my year at CERN
              </Card.Content>
            </Card>
            <Card href="https://github.com/indico/newdle">
              <Card.Content>
                <Card.Header>newdle</Card.Header>
                <Card.Meta>Python, Javascript, React</Card.Meta>
                <Card.Description>
                  Open Source Collaborative enterprise meeting scheduling tool.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Several contributions during my year at CERN
              </Card.Content>
            </Card>
            <Card href="https://github.com/python-babel/flask-babel">
              <Card.Content>
                <Card.Header>flask-babel</Card.Header>
                <Card.Meta>Python</Card.Meta>
                <Card.Description>
                  i18n and l10n support for Flask based on Babel and pytz
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Helped porting flask-babelex features to flask-babel
              </Card.Content>
            </Card>
            <Card href="https://github.com/mattermost/mattermost-server">
              <Card.Content>
                <Card.Header>mattermost-server</Card.Header>
                <Card.Meta>Go</Card.Meta>
                <Card.Description>
                  Open source Slack-alternative in Golang and React - Mattermost
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Fixed an issue where `mmctl channel move` did not allow moving private channels + added test coverage.
              </Card.Content>
            </Card>
          </Card.Group>
          <h2>Personal Projects</h2>
          <Card.Group>
            <Card href="https://github.com/Leats/ACNH-Fish">
              <Image src={ACNHFish} wrapped ui={false} />
              <Card.Content>
                <Card.Header>ACNH-Fish</Card.Header>
                <Card.Meta>JavaScript, React</Card.Meta>
                <Card.Description>
                  An interactive list of fish for the video game 'Animal
                  Crossing: New Horizons'. The user can select the fish they
                  already caught and see the fish yet to catch (and if they are
                  catchable right now).
                </Card.Description>
              </Card.Content>
            </Card>
            <Card href="https://github.com/Leats/AO3FanworkStatistics">
              <Image src={AO3Statistics} wrapped ui={false} />
              <Card.Content>
                <Card.Header>AO3FanworkStatistics</Card.Header>
                <Card.Meta>
                  Python, JavaScript (D3, Skrollr), PostgreSQL
                </Card.Meta>
                <Card.Description>
                  Scraper to collect statistics about fanworks in a database.
                  The corresponding created data visualizations are displayed on
                  github pages.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card href="https://github.com/Leats/spotify-historymaker">
              <Image src={SpotifyHistory} wrapped ui={false} />
              <Card.Content>
                <Card.Header>spotify-historymaker</Card.Header>
                <Card.Meta>Python, PostgreSQL</Card.Meta>
                <Card.Description>
                  Script for filling a database with info about a user's
                  recently played spotify tracks via Spotify's API. When run
                  regularly this can be used to create detailed statistics about
                  the listening history.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card href="https://github.com/Leats/spotify-historyviewer">
              <Image src={SpotifyHistoryViewer} wrapped ui={false} />
              <Card.Content>
                <Card.Header>spotify-historyviewer</Card.Header>
                <Card.Meta>Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn</Card.Meta>
                <Card.Description>
                  Current Work in Progress. An IPython Notebook created to visualize data taken from Spotify.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card href="https://github.com/Leats/ColorSchemeDesigner">
              <Image src={ColorScheme} wrapped ui={false} />
              <Card.Content>
                <Card.Header>ColorSchemeDesigner</Card.Header>
                <Card.Meta>Python</Card.Meta>
                <Card.Description>
                  Script for creating color schemes automatically after rules of
                  color theory.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    )
  }
}
export default App
