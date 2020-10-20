import Link from "next/link"

export default function Layout(props){
  return ( 
    <div>
    <style jsx>{`
      #navbar *{
        display: inline-block;
      }

      #navbar #links{
        margin-left: 20px;
      }

      #navbar #links a{
        margin-left: 9px;
      }
    `}</style>
      <div id="navbar" style={{ width: '100%', position: 'absolute', top: '0', left: '0', borderBottom: '1px solid'}}> 
        <h2>JDanielS</h2>

        <div id="links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/projects"><a>Project</a></Link>
          <Link href="/about"><a>About</a></Link>
          <a href="https://blogs.jdaniels.me">Blogs</a>
        </div>
      </div><br/><br/>
      <div id="content" style={props.style}>
        {props.children}
      </div>
    </div>
  )
}