import dbConnect from "@/dbConnection/Connect"
import Insight from "@/modal/blackCofferData";
export async function GET(){
    await dbConnect();
    try {
        // find where sector is Environment and topic is oil

        // const data = await Insight.find({sector: "Environment", topic: "oil"})
        const data = await Insight.find({}).limit(50)
        return Response.json(data);
    }
    catch (error) {
        console.log(error);
        return Response.json({error: true, message: "Something went wrong"});
    }
}
