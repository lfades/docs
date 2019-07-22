import React from 'react'
import { useAmp } from 'next/amp'
import Page from '~/components/layout/page'
import Header from '~/components/layout/header'
import { UserContext } from '~/lib/user-context'
import { ZenContext } from '~/lib/zen-context'
import UseTeamInfo from '~/lib/use-team-info'

const LayoutHeader = React.memo(props => {
  const isAmp = useAmp()
  return <Header {...props} isAmp={isAmp} />
})

// Closured variable for `onScroll` function
let ignore = false

export default class Layout extends React.Component {
  static contextType = ZenContext

  state = {
    navigationActive: false,
    zenModeActive: false,
    scrollPosition: 0,
    scrollDirection: null
  }

  altKeyDown = false

  exitZenMode = () => {
    this.setState(state => ({
      zenModeActive: false
    }))
  }

  onKeyDown(event) {
    // Make Zen mode run only for Screen sizes greater than 960px
    if (window.innerWidth < 960) {
      return
    }
    switch (event.keyCode) {
      case 90:
        // Enter Zen Mode
        if (this.altKeyDown) {
          this.setState({
            zenModeActive: !this.state.zenModeActive
          })
        }
        break

      case 27:
        // Exit Zen Mode
        this.setState({
          zenModeActive: false
        })

        break

      case 18: // alt-key
        this.altKeyDown = true
        break
    }
  }

  onKeyUp(event) {
    if (event.which === 18) {
      this.altKeyDown = false
    }
    this.altKeyDown = false
  }

  onScroll() {
    // Debounce scroll events by ignoring them until we're given the thread
    // to repaint
    if (ignore) {
      return
    }
    ignore = true

    requestAnimationFrame(async () => {
      ignore = false

      await this.setState({
        scrollDirection:
          this.state.scrollPosition < window.pageYOffset ? 'down' : 'up'
      })

      // Handle the scroll via setState, etc.
      this.setState({
        scrollPosition: window.pageYOffset
      })
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown.bind(this), false)
    document.addEventListener('keyUp', this.onKeyUp.bind(this), false)
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }

  handleToggleNavigation = () => {
    this.setState(({ navigationActive }) => {
      return {
        navigationActive: !navigationActive
      }
    })
  }

  handleIndexClick = () => {
    if (this.state.navigationActive) {
      this.setState({
        navigationActive: false
      })
    }
  }

  render() {
    const { children, dynamicSearch, data } = this.props
    const { scrollPosition, scrollDirection } = this.state

    return (
      <Page>
        <UserContext.Consumer>
          {({ user, userLoaded }) => (
            <UseTeamInfo
              user={user}
              render={({ teams }) => (
                <LayoutHeader
                  hideHeader={
                    scrollDirection === 'down' && scrollPosition > 0
                      ? true
                      : false
                  }
                  inHero={scrollPosition < 334}
                  isTop={scrollPosition <= 0}
                  hideHeaderSearch={dynamicSearch && scrollPosition < 334}
                  dynamicSearch={dynamicSearch}
                  onToggleNavigation={this.handleToggleNavigation}
                  user={user}
                  teams={teams}
                  userLoaded={userLoaded}
                  navigationActive={this.state.navigationActive}
                  handleIndexClick={this.handleIndexClick}
                  zenModeActive={this.state.zenModeActive}
                  exitZenMode={this.exitZenMode}
                  data={data}
                />
              )}
            />
          )}
        </UserContext.Consumer>
        <ZenContext.Provider value={this.state.zenModeActive}>
          {children}
        </ZenContext.Provider>
      </Page>
    )
  }
}
