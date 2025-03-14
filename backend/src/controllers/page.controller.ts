import { Request, Response } from 'express'

const home = (req: Request, res: Response) => {
  res.status(200).send("Welcome to my server!")
}

const setCookie = (req: Request, res: Response) => {
  if (req.session) {
    req.session.message = "This is your cookie content 🍪"
  }
  res.status(200).json({
    message: "You got a cookie!!!"
  })
}

const checkCookie = (req: Request, res: Response) => {
  if (req.session && req.session.message) {
    res.status(200).json({
      content: req.session.message
    })
    return
  }
  res.status(500).json({
    content: "No cookie found!"
  })
}

const clearCookie = (req: Request, res: Response) => {
  req.session = null
  res.status(200).json({
    content: "Session cookie cleared!"
  })
}

export default {
  home,
  setCookie,
  checkCookie,
  clearCookie
}