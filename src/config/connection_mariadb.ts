import {Client} from 'https://deno.land/x/mysql/mod.ts';

export const connection_bd = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'users',
    password: 'Abc123',
    port: 3306,
});