type ZeroBounceResponse = any;
const baseUrl = "https://api.zerobounce.net/v2";
export const validateEmail = async({
    email
}: { email: string; }):Promise<ZeroBounceResponse> => {
    const uri = `${baseUrl}/validate?api_key=${process.env.API_KEY}`;
    try{
const response = await fetch(uri,{method:"GET"});
if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);

}
const data:ZeroBounceResponse = await response.json();
return data;
    }
    catch(err){
console.error("error fetching valid api",err);
throw err;
    }
}