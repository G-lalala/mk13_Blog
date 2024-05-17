module.exports = [
  {
    message: 'What is the name of function?',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true
      }
    },
  },
]
