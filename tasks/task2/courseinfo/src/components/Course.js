const Course = ({ title, courseParts }) => {
    return (
      <div>
        <Header title={title} />
        <Content courseParts={courseParts} />
        <Total courseParts={courseParts}/>
      </div>
  )}
  
  const Header = ({ title }) => {
    return (
      <h1>{title}</h1>
  )}
  
  const Content = ({ courseParts }) => {
    const coursePart = courseParts.map(coursePartItem => {
     return <Part key={coursePartItem.id} name={coursePartItem.name} exercises={coursePartItem.exercises}/>
    })
    return (
      <ul>
        {coursePart}
      </ul>
  )}
  
  const Part = ({ name, exercises }) => {
    return (
      <li>
        {name} {exercises}
      </li>
  )}
  
  const Total = ({ courseParts }) => {
    const total = courseParts.reduce((sum, product) => {
      return sum + product.exercises
    },0)
    return (
      <p>Number of exercises {total}</p>
  )}

  export default Course