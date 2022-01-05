require('../src/db/mongoose')
const User = require('../src/models/user')

//The users id 61c209dd7ce1960925f3b58a

// User.findByIdAndUpdate('61d3432244b7e48df1c399c2', { age: 22}).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 22 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age }) // This is shortened from { age: age } because of same variable name
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('61d3432244b7e48df1c399c2', 23).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})