import Donut from "@/components/donut";

async function getData(){
    try {
        const res = await fetch(`${process.env.NEXT_URL}/api/getdata`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return {error: true, message: "Something went wrong"};
    }
}

export default async function Home() {


  const data = await getData();
  if(data.error) return <div>{data.message}</div>;

    // console.log(data);

  return (
   <>
     <Donut data={data} />
   </>
  );
}
