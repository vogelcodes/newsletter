// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../services/supabase";

export default async function subscribeAPI(req, res) {

  const date = new Date();
  const response = await supabase.from('leads').insert({
    email: req.body.email
  }) 
  console.log(JSON.stringify(response))
  
  res.redirect('/')
}
