import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={() => "404 Page Not Found!"} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '70%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'whitesmoke'
      }}>
        <h1>Hi welcome!</h1>
        <p>You may go to my current live <a style={{ color:'yellowgreen', textDecoration: 'none' }} href="https://portfoliov3.lalapolalaanewb.com">Portfolio V3</a> for the time being to see any updates regarding my works.</p>
        <p>As for the moment, I was unable to push my Portfolio V4 live using the Free Tier option from EC2 AWS platform. It just got 1GB RAM of memory. Not enough power to even build my Portfolio V4 react web app :-)</p>
        <p>And I don't plan on upgrading the EC2 instance for the time being tho since it will exceeds my current budget. But, if you guys have any recommendation on which cheap cloud server should I try to go for. I'll gladly give it a try then. :-)</p>
        <p>With that being said, happy coding guys!</p>
      </div>
    </div>
  )
}

export default App