// import sql from "@/lib/db.ts";
// import { getNowIntFloor } from "@/utils/epoch.ts";

export default async function log(method: string, message: string) {
  // await logToDb(method, message);
  logToFile(method, message);
}

export function logToFile(method: string, message: string) {
  const fs = require('fs');
  const content =
    new Date().toISOString() + ' - ' + method + ' - ' + message + '\n';

  fs.appendFile('log.txt', content, (error: any) => {
    if (error) return;
  });
}

// export async function logToDb(method: string, message: string)
// {
//     const obj = {
//         epoch: getNowIntFloor(),
//         method: method,
//         data: message
//     }
//     await sql`INSERT INTO log ${ sql(obj) }`;
// }
