"use strict"

const User = use("App/Models/User")
const Database = use('Database')

class UserController {
    async create({ request }) {

        const data = request.only(["username", "email", "password"])

        const user = await User.create(data)

        return user
    }

    async get({ request }) {

        const { id } = request.only(["id"])
        return await User.find(id)
    }

    async getAll() {

        return await User.all()
    }

    async updateUsername({ request }) {

        const { id, username } = request.only(["id", "username"])

        const affectedRows = await Database
            .table('users')
            .where('id', id)
            .update('username', username)

        return affectedRows
    }

    async updateEmail({ request }) {

        const { id, email } = request.only(["id", "email"])

        const affectedRows = await Database
            .table('users')
            .where('id', id)
            .update('email', email)

        return affectedRows
    }

    async delete({ request }) {

        const { id } = request.only(["id"])

        const affectedRows = await Database
            .table('users')
            .where('id', id)
            .delete()

        return affectedRows
    }
}

module.exports = UserController