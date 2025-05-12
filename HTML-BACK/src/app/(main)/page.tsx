async function MainPage() {
  await new Promise((res) => {
    setTimeout(res, 1000)
  })

  return <div>Main page</div>
}

export default MainPage
