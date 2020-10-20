import Layout from "../components/Layout"
import Head from "next/head"

class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout style={{ textAlign: 'center' }}>
        <Head>
          <title>JDanielS - About</title>
        </Head>
        
        <br/>

        <style jsx>{`
          .projects{
            display: inline-block;
            border: 2px solid;
            width: 220px;
            height: 220px;
            padding: 10px 10px;
            overflow: scroll;
            margin-left: 5px;
          }
        `}</style>
        <h2>Who is JDanielS?</h2>
        <code>JDanielS is an idiot that loves programming. He makes a lot of small projects. He is a moderator at <a href="https://auntodev.com">Aunto Development</a> and the founder of <a href="https://discord.gg/EzecfUX">Null Bot</a>. You can contact him through Discord (Hackermon#0001) or <a href="https://message.jdaniels.me">send an anonymous message to him.</a></code>
      </Layout>
    )
  }
}

export default About