import axiod from "https://deno.land/x/axiod/mod.ts";



const { data } = await axiod<{ delay: string }>(
  "https://postman-echo.com/delay/2"
);

console.log(data)