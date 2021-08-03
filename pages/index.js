
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Ticket from '../components/Ticket';

// var url = "https://zccticketshelp.zendesk.com/api/v2/tickets.json?page[size]=25";

export default function Home({ tickets }) {

  console.log(tickets[0].subject);
  // ticket_list = [];
  // while (tickets) {
  //   per_page = [];
  //   num_tickets = 0
  //   count = 0;
  //   while (count != 25) {
  //     per_page.push(tickets[count]);
  //     count++;
  //   }
  //   num_tickets += count;
  //   ticket_list.push(per_page);
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zendesk Tickets</title>
        <meta name="Tickets" content="zendesk, tickets" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tickets
        </h1>

        <p className={styles.description}>
          shows a list of available tickets
        </p>

        {tickets.map((ticket) => (
          <Ticket key={ticket.id}
            description={ticket.description}
            name={ticket.subject}
          />
        ))}

        {/* <button onClick={handleClick} disabled={!url}>PREV</button>
        <button onClick={getNextData()}>NEXT</button> */}
      </main>
    </div>
  )
}


export const getStaticProps = async () => {

  url = `https://zccticketshelp.zendesk.com/api/v2/tickets.json?page[size]=25`

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Authorization", "Basic dWVrcG91ZG9tM0BnbWFpbC5jb206RWtwb3Vkb20jMTE=");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const res = await fetch(url, requestOptions);
  const data = await res.json();

  while (url) {

    if (data.meta.has_more) {
      url = data.links.next;
      const res = await fetch(url, requestOptions);
      const data = await res.json();
    } else {
      const res = await fetch(url, requestOptions);
      const data = await res.json();

    }

    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return {
      props: { tickets: data.tickets }
    }


    // const res = await fetch(url, requestOptions);
    // const data = await res.json();

    // if (!data) {
    //   return {
    //     redirect: {
    //       destination: '/',
    //       permanent: false,
    //     },
    //   }
    // }

    // return {
    //   props: { tickets: data.tickets }
    // }
  }
}
// export default function Home({ tickets }) {
//   console.log(tickets);
//   const Tickets = ({ tickets }) => {
//     return (
//       <div>
//         <h1>Tickets</h1>
//         {tickets.map(ticket => (
//           <div key={ticket.id}>
//             <h3>{ticket.name}</h3>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }


