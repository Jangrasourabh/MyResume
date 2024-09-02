const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: "secret_a2sT3TA2Ye2PxLQVQxeSRwij6oKr0njavNhPizCENWh",
})

 const getNotionData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return response.results
}

 const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

 const getBlocks = async (blockId) => {
  const blocks = []
  let cursor
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}

module.exports = { getNotionData, getPage, getBlocks }