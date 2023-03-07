export const Input = ({handlerChange}) => {
  return (
    <input
      id="apellido"
      name="apellido"
      onChange={handlerChange}
      placeholder="Ingresar email"
  />
  )
}