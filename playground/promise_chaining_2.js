require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61c214400bb751fe34172810').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(`The remaining incomplete tasks are ${result}`)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count
}

deleteTaskAndCount('61c0d0e4643212f6f0d23fd6').then((result) => {
  console.log(`The remaining incomplete tasks are ${result}`)
}).catch((e) => {
  console.log(e)
})