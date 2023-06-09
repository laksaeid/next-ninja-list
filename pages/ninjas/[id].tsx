export const getStaticPaths = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja:any) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
     paths,
     fallback:false
  };
};

export const getStaticProps = async function(context:any){
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json()

    return{
        props:{
            ninja:data
        }
    }
}

const Details = ({ninja}:any) => {
    return (
        <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
