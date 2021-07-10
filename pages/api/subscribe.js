// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function subscribeAPI(req, res) {

  const date = new Date();
  console.log(req.body)
  
  res.status(200).json({ name: 'John Doe'})
}
