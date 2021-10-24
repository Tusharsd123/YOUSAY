import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Posts";

const main = async () => {
const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'YOUSAY',
    type: 'postgresql',
    debug: !__prod__,
});
}

main();

