//call back

fetch('')
  .then((res) => res.json())
  .then((data) => {
    return data
  })

//async await

async function getData() {
  const res = await fetch('')
  const data = res.json()
  return data
}

//arrow function
const getCategory = async () => {
  const res = await fetch('')
  const data = res.json()
  return data
}

//For data load to need:
/*
 * 1. Suspense => fallback set
 * 2. create a promise function to load data
 * 3. send the promise to the component to load data
 */
