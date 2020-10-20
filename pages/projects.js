import Layout from "../components/Layout"
import Head from "next/head"

class Projects extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout style={{ textAlign: 'center' }}>
        <Head>
          <title>JDanielS - Projects</title>
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
        <h2>My Dumb Projects</h2>
        <div id="projects">
          <div className="projects">
            <a href="https://img.jdaniels.me"><h2>img.jdaniels.me</h2></a>
            <p>A tool I created to easily upload images, it also has an API but thats mostly private.  I try to add more features when I have the time.</p>
          </div>

          <div className="projects">
            <a href="https://text-to-speech-chat.pdaniely.repl.co/"><h2>Text-To-Speech</h2></a>
            <p>A text to speech chat that I created for fun. It is inspired by a youtube video that I saw.</p>
          </div>

          <div className="projects">
            <a href="https://discord.gg/EzecfUX"><h2>Null Discord Bot</h2></a>
            <p>A discord bot that I created for moderatoin, music, starboard, giveaways, etc. I'm no longer the owner but its still a cool project.</p>
          </div>

          <div className="projects">
            <a href="https://repl.it/@PDanielY/GitHub-Follower-Bot#main.py"><h2>Github Follower Bot</h2></a>
            <p>This was a project I created when I was bored. It automatically gets random github usernames and follows them. ( It's currently down since GitHub told me to stop )</p>
          </div>

          <div className="projects">
            <a href="https://writer.jdaniels.me"><h2>Typer</h2></a>
            <p>A website that you can test your typing speed. It gives a few sentences to type out and records your WPM.</p>
          </div>

          <div className="projects">
            <a href="https://replpedia.jdaniels.me"><h2>Replpedia</h2></a>
            <p>A wikipedia for repl.it that has a lot of wikis about different things on repl.it</p>
          </div>

          <div className="projects">
            <a href="https://message.jdaniels.me"><h2>Message</h2></a>
            <p>A way to send messages to me.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Projects