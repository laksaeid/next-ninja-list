import styles from '@/styles/Jobs.module.css'
import Link from 'next/link';

export const getStaticProps = async function(){


  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props:{
      ninjas:data
    }
  }


}

const Ninjas = ({ninjas}:any) => {
  console.log(ninjas);
  
    return (
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja:any)=>(
          <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
            <div className={styles.single}>
              <h3>{ninja.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
   
  export default Ninjas;