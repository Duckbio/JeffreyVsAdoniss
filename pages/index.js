import Link from 'next/link';
import Navbar from "../componenets/Navbar"
import react from 'react'
import Script from 'next/script';
// import connectMonogo from '../utils/connectDB'
// import User from '../models/user';

export default function HomePage() { 
  return (
    <div>
      <div className='all'>
        <Navbar />
        <div className='message'>
          <h1>Yo!</h1>
          <h4>Welcome to my site. My name is Rata, I'm a 14 year old kid from Romania who likes to code for fun {':)'} I won't waste much of your time, but I do ask you to follow my <a href={"https://www.instagram.com/brycerobert8/"} className='link' >Instagram page</a> and <a className='link' href="https://www.youtube.com/channel/UC5RQqqUQnrQeGxlbls-7VeA">YouTube channel</a>, since I have worked 2 months on this site and have put a ton of effort into it, you can also find the links to them in the footer.</h4>
          <h4>I have made this website to assist in my self-improvement journey. I vouch to constantly update and work on this webstie, so it can become the ultimate self-improvement toolkit. At the moment there are two features: the daily progress bar and the quality calculator. The daily progress bar is quite simple, you add/subtract all the habits you've done that day, and the site gives you the potential you have reached in that day through a beautiful progress bar. The quality calcuator roughly estimates your quality as a man, I recommend you ask your friends for objective opinions on some of them, such as physical appearance.</h4>
          <h4>Lastly, if you have anything to tell me, please dm me on Instagram or on discord, Rata#7138.</h4>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Karla:wght@400;500;700&display=swap');
        .all {
          color: white;
        }

        .message {
          margin-left: 2.3vw;
          width: 97vw;
        }

        .link {
          color: white;
        }
      `}</style>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   try {
//       console.log('CONNECTING TO MONGO');
//       await connectMonogo();
//       console.log('CONNECTING TO MONGO');
//       console.log('FETCHING DOCS');
//       const users = await User.find();
//       console.log('FETCHED THEM');
//       return {
//           props: {
//               users: JSON.parse(JSON.stringify(users)),
//           }, 
//       };
//   } catch(error) {
//       console.log(error);
//       return {
//           notFound: true
//       }
//   }
// }