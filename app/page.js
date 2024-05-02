import Donut from "@/components/donut";

async function getData(){
  return await fetch(`${process.env.NEXT_URL}/api/getdata`,{
    method: "GET",
  }).then((res) => res.json());
}

export default async function Home() {


  // const data = await getData();
    // console.log(data);

  return (
   <>
       <h1>Anmol Jain</h1>
     {/*<Donut data={data} />*/}
   </>
  );
}
