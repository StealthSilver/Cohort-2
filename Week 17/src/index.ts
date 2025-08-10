import {Client} from "pg";

const pgClient = new Client('postgresql://neondb_owner:npg_i1FznEcw3Aqf@ep-silent-wave-afzqxl71-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function main(){
    await pgClient.connect();

    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response);
}

main()