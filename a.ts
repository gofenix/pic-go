import axiod from "https://deno.land/x/axiod/mod.ts";
import { print } from "./base.js";


const { data } = await axiod<{ delay: string }>(
  "https://postman-echo.com/delay/2"
);

print(data)