import Layout from "../components/Layout"
import Head from "next/head"

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout style={{ textAlign: 'center' }}>
        <Head>
          <title>JDanielS - Home</title>
        </Head>
        <h1>JDanielS</h1>
        <p>Professional Idiot</p>

        <br/><br/>
        <code>Featured Project: <a href="https://typer.jdaniels.me"><code>Typer</code></a></code>
      </Layout>
    )
  }
}

export default HomePage