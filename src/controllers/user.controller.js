import { pool } from "../libs/db.js";

import { errorHandler } from "../helpers/errorHandler.js";

export const getUserById = (req, res) => {
  const { id_user } = req.params
  pool.query(`
    select *
    from users
    where id_user = ${id_user}
  `)
  .then((data) => {
    const info = data[0]
    res.json({
      data: info
    })
  })
  .catch(error => {
    errorHandler(res, 404, "Error al obtener la informacion de los productos", error)
  })
}

export const createUser = (req, res) => {
  const { body } = req
  const { name, email, user, password } = body
  pool.query(`
    insert into users (fullname, user, email, password, state_id)
    values
    ("${name}", "${user}", "${email}", "${password}", 1)
  `)
  .then((data) => {
    const info = data[0]
    res.json({
      data: info
    })
  })
  .catch(error => {
    errorHandler(res, 404, "Error al crear el usuario", error)
  })
}

export const updateUser = ({ body }, res) => {
  const { user } = body
  const { id_user, name, email, userName, password } = user
  pool.query(`
    update users
    set
      fullname = '${name}',
      email = '${email}',
      user = '${userName}',
      password = '${password}'
    where id_user = ${id_user}
  `)
  .then((data) => {
    const info = data[0]
    res.json({
      data: info
    })
  })
  .catch(error => {
    errorHandler(res, 404, "Error al actualizar el usuario", error)
  })

}

export const verifyUser = (req, res) => {
  const { body } = req
  pool.query(`
    select *
    from users
    where email = "${body.email}" and password = "${body.password}"
  `)
  .then((data) => {
    const infoUser = data[0]
    const { id_user, fullname, user, email, state_id, profile_id } = infoUser[0]
    const bodyToResponse = {
      id_user,
      fullname,
      user,
      email,
      state_id,
      profile_id
    }

    if (infoUser.length) {
      res.json({
        'infoUser': bodyToResponse
      })
    } else {
      errorHandler(res, 404, "Verifica los datos de ingreso.", e)
    }
  })
  .catch((e) => {
    errorHandler(res, 404, "Verifica los datos de ingreso.", e)
  })

}

