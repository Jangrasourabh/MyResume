const { createServer } = require("http");
const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 8080;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
// const Redis = require('ioredis');
const { getNotionData, getPage, getBlocks } = require("./lib/getNotionData");
// const redis = new Redis();

app.prepare().then(() => {
  const expressApp = express();

  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({ extended: true }));

  expressApp.get("/server", async (req, res) => {
    res.status(200).json({ message: "Hello from server" });
  });

  // expressApp.get('/all-blog-posts', async (req, res) => {
  //     try {
  //         let database = JSON.parse(await redis.get('database'));
  //         if (!database) {
  //             database = await getNotionData(process.env.NOTION_DATABASE_ID)
  //             await redis.set('database', JSON.stringify(database), 'EX', 60 * 60 * 24 * 30);
  //             console.log(` DB CALLING.... `,)
  //         } else {
  //             console.log(` REDIS CALLING.... `,)
  //         }

  //         const filteredResponse = database.map(item => {
  //             const { id, properties, url } = item;
  //             const { Description, Slug, Published, Date, Post } = properties;

  //             return {
  //                 id,
  //                 Description: Description ? Description.rich_text[0].plain_text : null,
  //                 Slug: Slug ? Slug.multi_select[0].name : null,
  //                 Published: Published ? Published.checkbox : null,
  //                 Date: Date ? Date.date.start : null,
  //                 Heading: Post ? Post.title[0].plain_text : null,
  //                 url: url,
  //             };
  //         });

  //         res.status(200).send({
  //             statusCode: 200,
  //             message: 'Data fetched successfully',
  //             data: filteredResponse
  //         })

  //     } catch (error) {
  //         res.status(400).send({
  //             statusCode: 400,
  //             message: error.message,
  //         })
  //     }
  // })

  // expressApp.get('/single-blog-post-notion/:slug', async (req, res) => {
  //     try {
  //         let blogSlug = req.params.slug;
  //         let database = await getNotionData(process.env.NOTION_DATABASE_ID)
  //         await redis.set('database', JSON.stringify(database), 'EX', 60 * 60 * 24 * 30);
  //         const filter = database.filter((blog) => {
  //             return blog.properties.Slug.multi_select[0].name === blogSlug
  //         })
  //         if (filter.length === 0) {
  //             res.status(200).send({
  //                 statusCode: 200,
  //                 message: 'Data not found',
  //             })
  //             return
  //         }

  //         let page = await getPage(filter[0].id)
  //         redis.set('page:' + filter[0].id, JSON.stringify(page), 'EX', 60 * 60 * 24 * 30);

  //         let blocks = await getBlocks(filter[0].id)
  //         redis.set('blocks:' + filter[0].id, JSON.stringify(blocks), 'EX', 60 * 60 * 24 * 30);

  //         const childrenBlocks = await Promise.all(
  //             blocks
  //                 .filter((block) => block.has_children)
  //                 .map(async (block) => {
  //                     return {
  //                         id: block.id,
  //                         children: await getBlocks(block.id),
  //                     }
  //                 })
  //         )

  //         const blocks_ = blocks.map((block) => {
  //             if (block.has_children) {
  //                 block[block.type].children = childrenBlocks.find((x) => x.id === block.id).children
  //             }
  //             return block
  //         })

  //         res.status(200).send({
  //             statusCode: 200,
  //             message: 'Data fetched successfully',
  //             data: {
  //                 page,
  //                 blocks_
  //             }
  //         })

  //     } catch (error) {
  //         res.status(400).send({
  //             statusCode: 400,
  //             message: error.message,
  //         })
  //     }
  // })

  // expressApp.get('/single-blog-post/:slug', async (req, res) => {
  //     try {
  //         let blogSlug = req.params.slug;
  //         let database = JSON.parse(await redis.get('database'));
  //         if (!database) {
  //             database = await getNotionData(process.env.NOTION_DATABASE_ID)
  //             await redis.set('database', JSON.stringify(database), 'EX', 60 * 60 * 24 * 30);
  //             console.log(` DB CALLING.... `,)
  //         } else {
  //             console.log(` REDIS CALLING.... `,)
  //         }
  //         const filter = database.filter((blog) => {
  //             return blog.properties.Slug.multi_select[0].name === blogSlug
  //         })
  //         if (filter.length === 0) {
  //             res.status(200).send({
  //                 statusCode: 200,
  //                 message: 'Data not found',
  //             })
  //             return
  //         }

  //         let page = JSON.parse(await redis.get('page:' + filter[0].id));
  //         if (!page) {
  //             page = await getPage(filter[0].id)
  //             redis.set('page:' + filter[0].id, JSON.stringify(page), 'EX', 60 * 60 * 24 * 30);
  //         }

  //         let blocks = JSON.parse(await redis.get('blocks:' + filter[0].id));
  //         if (!blocks) {
  //             blocks = await getBlocks(filter[0].id)
  //             redis.set('blocks:' + filter[0].id, JSON.stringify(blocks), 'EX', 60 * 60 * 24 * 30);
  //         }

  //         const childrenBlocks = await Promise.all(
  //             blocks
  //                 .filter((block) => block.has_children)
  //                 .map(async (block) => {
  //                     return {
  //                         id: block.id,
  //                         children: await getBlocks(block.id),
  //                     }
  //                 })
  //         )

  //         const blocks_ = blocks.map((block) => {
  //             if (block.has_children) {
  //                 block[block.type].children = childrenBlocks.find((x) => x.id === block.id).children
  //             }
  //             return block
  //         })

  //         res.status(200).send({
  //             statusCode: 200,
  //             message: 'Data fetched successfully',
  //             data: {
  //                 page,
  //                 blocks_
  //             }
  //         })

  //     } catch (error) {
  //         res.status(400).send({
  //             statusCode: 400,
  //             message: error.message,
  //         })
  //     }
  // })

  expressApp.get("*", async (req, res, next) => {
    return handle(req, res);
  });

  createServer(expressApp).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
