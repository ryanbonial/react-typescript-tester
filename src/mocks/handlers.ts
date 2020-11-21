import { rest } from 'msw'

export const handlers = [
  rest.get('/api/dad-joke', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "ElbaF6wHlyd",
        joke: "this is a random joke",
        "status": 200
      }),
    )
  }),
  rest.get('/api/dad-joke/search', (req, res, ctx) => {
    const term = req.url.searchParams.get('term')
    return res(
      ctx.status(200),
      ctx.json({
        "current_page": 1,
        "limit": 20,
        "next_page": 2,
        "previous_page": 1,
        "results": [
          { "id": "sPfqWDlq4Ed", "joke": `this is a joke about ${term}` }
        ],
        "search_term": term,
        "status": 200,
        "total_jokes": 73,
        "total_pages": 4
      }
      ),
    )
  }),
];
