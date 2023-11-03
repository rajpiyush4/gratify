
function layout({comment, children}:{
    comment:React.ReactNode,
    children:React.ReactNode
}) {

  return (
    <>
    {children}
    {comment}
    </>
  )
}

export default layout