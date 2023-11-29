import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function GET(request,response) {
    
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
        return Response.json({error:'User not found'})
    }
    return Response.json({user:user})
}