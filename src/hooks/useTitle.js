import { useEffect } from "react"

export const useTitle = (title) => {

  useEffect(()=>{
    document.title = `BookMate | ${title}`
  },[title])


  return (
  null
  )
}
